import BN from 'bn.js'
import { formatBalance } from '@polkadot/util'

function format(
  balance: number | string | BN | bigint,
  decimals = 12,
  withUnit?: boolean | string,
  withSi?: boolean
) {
  try {
    var res = formatBalance(balance, {
      decimals,
      withUnit,
      forceUnit: '-',
      withSi,
    })
    console.info(
      '[FORMAT BALANCE]',
      String(balance),
      typeof(balance),
      decimals,
      String(res)
    )
    return res
  } catch (e: any) {
    console.warn(
      '[FORMAT BALANCE]',
      e.message,
      String(balance),
      typeof(balance),
      decimals
    )
    return ''
  }
}

export function calculateBalance(value: number, decimals = 12): number {
  return Math.trunc(value * Math.pow(10, decimals))
}

export function checkInvalidBalanceFilter(value) {
  if (value === Infinity) {
    return '0'
  }
  return value
}

export default format

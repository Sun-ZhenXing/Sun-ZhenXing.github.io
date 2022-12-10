export function float32_to_uint32(f: number): number {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setFloat32(0, f, true);
  return view.getUint32(0, true);
}

export function float64_to_uint64(f: number): bigint {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setFloat64(0, f, true);
  return view.getBigUint64(0, true);
}

export function uint32_to_float32(i: number): number {
  const buffer = new ArrayBuffer(4);
  const view = new DataView(buffer);
  view.setUint32(0, i, true);
  return view.getFloat32(0, true);
}

export function uint64_to_float64(i: bigint): number {
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setBigUint64(0, i, true);
  return view.getFloat64(0, true);
}

export function uint_to_hex(i: number, bit_length: number = 32): string {
  const str = i.toString(16);
  return '0'.repeat(bit_length / 4 - str.length) + str;
}

export function uint_to_bin(i: number, bit_length: number = 32): string {
  const str = i.toString(2);
  return '0'.repeat(bit_length - str.length) + str;
}

export function hex_to_uint(s: string, bit_length: number = 32): number {
  return parseInt(s, 16) & (2 ** bit_length - 1);
}

export function bin_to_uint(s: string, bit_length: number = 32): number {
  return parseInt(s, 2) & (2 ** bit_length - 1);
}

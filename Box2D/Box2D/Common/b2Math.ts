/*
* Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
*
* This software is provided 'as-is', without any express or implied
* warranty.  In no event will the authors be held liable for any damages
* arising from the use of this software.
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
* 2. Altered source versions must be plainly marked as such, and must not be
* misrepresented as being the original software.
* 3. This notice may not be removed or altered from any source distribution.
*/

import { b2_pi } from "./b2Settings";

export { b2Vec2 } from "./Math/b2Vec2";
export { b2Vec3 } from "./Math/b2Vec3";
export { b2Mat22 } from "./Math/b2Mat22";
export { b2Mat33 } from "./Math/b2Mat33";
export { b2Transform } from "./Math/b2Transform";
export { b2Rot } from "./Math/b2Rot";
export { b2Sweep } from "./Math/b2Sweep";

export const b2_pi_over_180: number = b2_pi / 180;
export const b2_180_over_pi: number = 180 / b2_pi;
export const b2_two_pi: number = 2 * b2_pi;

export const b2Abs = Math.abs;
// export function b2Abs(n: number): number {
//   return (n < 0) ? (-n) : (n);
// }

export const b2Min = Math.min;
// export function b2Min(a: number, b: number): number {
//   return (a < b) ? (a) : (b);
// }

export const b2Max = Math.max;
// export function b2Max(a: number, b: number): number {
//   return (a > b) ? (a) : (b);
// }

export function b2Clamp(a: number, lo: number, hi: number): number {
  return (a < lo) ? (lo) : ((a > hi) ? (hi) : (a));
}

export function b2Swap<T>(a: T[], b: T[]): void {
  ///b2Assert(false);
  const tmp: T = a[0];
  a[0] = b[0];
  b[0] = tmp;
}

/// This function is used to ensure that a floating point number is
/// not a NaN or infinity.
export function b2IsValid(n: number): boolean {
  return isFinite(n);
}

export function b2Sq(n: number): number {
  return n * n;
}

/// This is a approximate yet fast inverse square-root.
export function b2InvSqrt(n: number): number {
  return 1 / Math.sqrt(n);
}

export const b2Sqrt = Math.sqrt;
// export function b2Sqrt(n: number): number {
//   return Math.sqrt(n);
// }

export const b2Pow = Math.pow;
// export function b2Pow(x: number, y: number): number {
//   return Math.pow(x, y);
// }

export function b2DegToRad(degrees: number): number {
  return degrees * b2_pi_over_180;
}

export function b2RadToDeg(radians: number): number {
  return radians * b2_180_over_pi;
}

export const b2Cos = Math.cos;
// export function b2Cos(radians: number): number {
//   return Math.cos(radians);
// }

export const b2Sin = Math.sin;
// export function b2Sin(radians: number): number {
//   return Math.sin(radians);
// }

export const b2Acos = Math.acos;
// export function b2Acos(n: number): number {
//   return Math.acos(n);
// }

export const b2Asin = Math.asin;
// export function b2Asin(n: number): number {
//   return Math.asin(n);
// }

export const b2Atan2 = Math.atan2;
// export function b2Atan2(y: number, x: number): number {
//   return Math.atan2(y, x);
// }

export function b2NextPowerOfTwo(x: number): number {
  x |= (x >> 1) & 0x7FFFFFFF;
  x |= (x >> 2) & 0x3FFFFFFF;
  x |= (x >> 4) & 0x0FFFFFFF;
  x |= (x >> 8) & 0x00FFFFFF;
  x |= (x >> 16) & 0x0000FFFF;
  return x + 1;
}

export function b2IsPowerOfTwo(x: number): boolean {
  return x > 0 && (x & (x - 1)) === 0;
}

export function b2Random(): number {
  return Math.random() * 2 - 1;
}

export function b2RandomRange(lo: number, hi: number): number {
  return (hi - lo) * Math.random() + lo;
}

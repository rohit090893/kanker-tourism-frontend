import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


export const authGuard=()=>{
  return !!localStorage.getItem('token');
}

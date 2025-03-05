export interface Register {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface Verify {
  email: string;
  otp: string;
  role: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface UserProfile {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
  initials?: string;
  role: string;
  active: boolean;
}

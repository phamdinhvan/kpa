export interface User {
  id: string;
  phone: string;
  role: string;
  createdAt: string;
}

export interface Driver {
  id: string;
  userId: string;
  vehicleType: string;
  status: string;
  createdAt: string;
}

export interface Job {
  id: string;
  type: string;
  pickupLocation: string;
  dropoffLocation: string;
  status: string;
  price: number;
  driverId: string | null;
  createdAt: string;
}

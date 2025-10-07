export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  category: 'consultation' | 'treatment' | 'wellness' | 'cosmetic';
  image?: string;
  featured?: boolean;
}

export interface BookingSlot {
  id: string;
  date: Date;
  time: string;
  available: boolean;
  serviceId?: string;
}

export interface Booking {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  serviceId: string;
  slotId: string;
  date: Date;
  time: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
}

export interface ChatMessage {
  id: string;
  sender: 'patient' | 'clinic';
  message: string;
  timestamp: Date;
  encrypted?: boolean;
}

export interface VirtualTourStop {
  id: string;
  name: string;
  description: string;
  image: string;
  coordinates: { x: number; y: number };
  hotspots?: Array<{
    x: number;
    y: number;
    label: string;
    description: string;
  }>;
}
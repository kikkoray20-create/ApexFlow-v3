
import React from 'react';
import { 
  ShoppingBag, 
  Users, 
  Radio, 
  Link as LinkIcon, 
  Box, 
  Layers, 
  UserCog, 
  FileText,
  Package,
  CheckCircle,
  Truck,
  Clock,
  Send,
  UserPlus,
  ShieldAlert
} from 'lucide-react';
import { Order, StatCardData, SidebarItem, OrderItem, InventoryItem, User, Customer, Firm } from './types';

export const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 'orders', label: 'Orders', icon: <ShoppingBag size={18} />, active: true },
  { 
    id: 'clients', 
    label: 'Clients', 
    icon: <Users size={18} />, 
    subItems: [
      { label: 'Clients', id: 'clients' },
      { label: 'Client Firms', id: 'customer_firms' },
      { label: 'Client GR', id: 'customer_gr' }
    ],
    isOpen: false 
  },
  { id: 'links', label: 'Links', icon: <LinkIcon size={18} /> },
  { id: 'models', label: 'Model & Inventory', icon: <Box size={18} />, subItems: [{ label: 'Shop Model List', id: 'models' }, { label: 'Inventory', id: 'inventory' }], isOpen: false },
  { 
    id: 'users', 
    label: 'User Management', 
    icon: <UserCog size={18} />, 
    subItems: [
        { label: 'Team Registry', id: 'users' },
        { label: 'Master Control', id: 'master_control' }
    ],
    isOpen: false 
  },
  { 
    id: 'reports', 
    label: 'Reports', 
    icon: <FileText size={18} />, 
    subItems: [
      { label: 'Order Reports', id: 'order_reports' },
      { label: 'Client Order Report', id: 'customer_order_report' },
      { label: 'Daily Fulfilled Summary', id: 'order_summary' },
      { label: 'GR Reports', id: 'gr_reports' }
    ], 
    isOpen: false 
  },
];

export const MOCK_USERS: User[] = [];

export const MOCK_FIRMS: Firm[] = [];

export const MOCK_CUSTOMERS: Customer[] = [];

export const MOCK_INVENTORY: InventoryItem[] = [];

export const MOCK_ORDERS: Order[] = [];

export const MOCK_ORDER_ITEMS: Record<string, OrderItem[]> = {};

export const STATS_DATA: StatCardData[] = [
  { label: 'Total', value: 0, colorClass: 'bg-blue-50', iconColorClass: 'text-blue-500', icon: <ShoppingBag size={20}/> },
  { label: 'Fresh', value: 0, colorClass: 'bg-red-50', iconColorClass: 'text-red-500', icon: <Package size={20}/> },
  { label: 'Assigned', value: 0, colorClass: 'bg-purple-50', iconColorClass: 'text-purple-600', icon: <UserPlus size={20}/> },
  { label: 'Packed', value: 0, colorClass: 'bg-yellow-50', iconColorClass: 'text-yellow-600', icon: <Box size={20}/> },
  { label: 'Checked', value: 0, colorClass: 'bg-green-50', iconColorClass: 'text-green-500', icon: <CheckCircle size={20}/> },
  { label: 'Dispatched', value: 0, colorClass: 'bg-orange-50', iconColorClass: 'text-orange-500', icon: <Truck size={20}/> },
  { label: 'Sent', value: 0, colorClass: 'bg-cyan-50', iconColorClass: 'text-cyan-500', icon: <Send size={20}/> },
  { label: 'Pending', value: 0, colorClass: 'bg-orange-100', iconColorClass: 'text-orange-600', icon: <Clock size={20}/> },
];

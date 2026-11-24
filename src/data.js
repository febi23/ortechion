import {
  Calculator, Receipt, Wallet, Users, UserPlus, CalendarCheck, Clock, Award,
  TrendingUp, Handshake, ShoppingCart, Store, Globe, Megaphone, Mail,
  Package, Truck, Factory, Wrench, ShieldCheck, Boxes, Layers,
  FolderKanban, Timer, Headphones, MapPin, FileText, Car, Repeat, KeyRound,
  Code2, Smartphone, Plug, Database, Cloud, GraduationCap, Lightbulb, Rocket,
  HeartPulse, School, Building2, HardHat, Hotel, ShoppingBag, Warehouse, Briefcase,
} from 'lucide-react';

export const CATEGORIES = ['All', 'Finance', 'Sales', 'Operations', 'Human Resources', 'Services', 'Marketing'];

export const MODULES = [
  { name: 'Accounting', cat: 'Finance', icon: Calculator, desc: 'Double-entry ledgers, bank sync, reconciliation, multi-currency and real-time financial reports.' },
  { name: 'Invoicing', cat: 'Finance', icon: Receipt, desc: 'Branded invoices, online payments, automatic follow-ups and recurring billing.' },
  { name: 'Expenses', cat: 'Finance', icon: Wallet, desc: 'Snap receipts, route approvals and reimburse employees in a few clicks.' },
  { name: 'Subscriptions', cat: 'Finance', icon: Repeat, desc: 'Recurring revenue, MRR tracking, renewals and automated invoicing.' },

  { name: 'Sales', cat: 'Sales', icon: TrendingUp, desc: 'Quotations to orders in seconds with pricelists, discounts and e-signatures.' },
  { name: 'CRM', cat: 'Sales', icon: Handshake, desc: 'Visual pipelines, lead scoring, activity planning and win-rate forecasting.' },
  { name: 'Point of Sale', cat: 'Sales', icon: Store, desc: 'Touch-friendly retail & restaurant POS that works offline and syncs live.' },
  { name: 'eCommerce', cat: 'Sales', icon: ShoppingCart, desc: 'Online store fully connected to stock, pricing, payments and delivery.' },
  { name: 'Rental', cat: 'Sales', icon: KeyRound, desc: 'Bookings, availability calendar, pickup & return with late-fee rules.' },

  { name: 'Inventory', cat: 'Operations', icon: Package, desc: 'Multi-warehouse stock, barcode scanning, lots, serials and smart replenishment.' },
  { name: 'Purchase', cat: 'Operations', icon: Truck, desc: 'RFQs, vendor bills, purchase agreements and automated reordering.' },
  { name: 'Manufacturing', cat: 'Operations', icon: Factory, desc: 'Bills of materials, work orders, routing, shop-floor tablets and MRP planning.' },
  { name: 'Quality', cat: 'Operations', icon: ShieldCheck, desc: 'Quality checkpoints, alerts and control charts at every production step.' },
  { name: 'Maintenance', cat: 'Operations', icon: Wrench, desc: 'Preventive & corrective maintenance for equipment with MTBF analytics.' },
  { name: 'PLM', cat: 'Operations', icon: Layers, desc: 'Engineering change orders, versioned BoMs and product lifecycle control.' },
  { name: 'Barcode & WMS', cat: 'Operations', icon: Boxes, desc: 'Mobile picking, packing, put-away and batch transfers for warehouses.' },

  { name: 'Employees', cat: 'Human Resources', icon: Users, desc: 'Centralized employee directory, contracts, documents and org charts.' },
  { name: 'Recruitment', cat: 'Human Resources', icon: UserPlus, desc: 'Job posts, applicant pipelines, interviews and offer letters.' },
  { name: 'Payroll', cat: 'Human Resources', icon: Wallet, desc: 'Salary structures, payslips, statutory rules and accounting entries.' },
  { name: 'Attendance', cat: 'Human Resources', icon: Clock, desc: 'Check-in kiosks, geo-fenced mobile attendance and overtime tracking.' },
  { name: 'Time Off', cat: 'Human Resources', icon: CalendarCheck, desc: 'Leave allocation, approvals and team calendars with accrual policies.' },
  { name: 'Appraisals', cat: 'Human Resources', icon: Award, desc: 'Goals, 360° feedback, skills tracking and performance reviews.' },

  { name: 'Project', cat: 'Services', icon: FolderKanban, desc: 'Kanban, Gantt, milestones and profitability per project.' },
  { name: 'Timesheets', cat: 'Services', icon: Timer, desc: 'Log hours from anywhere and bill them straight to customers.' },
  { name: 'Helpdesk', cat: 'Services', icon: Headphones, desc: 'Multi-channel ticketing, SLAs, live chat and customer portal.' },
  { name: 'Field Service', cat: 'Services', icon: MapPin, desc: 'Dispatch technicians, route planning, worksheets and on-site signatures.' },
  { name: 'Documents', cat: 'Services', icon: FileText, desc: 'Smart document storage with OCR, workflows and digital signatures.' },
  { name: 'Fleet', cat: 'Services', icon: Car, desc: 'Vehicles, contracts, fuel logs and service costs in one place.' },

  { name: 'Email Marketing', cat: 'Marketing', icon: Mail, desc: 'Drag-and-drop campaigns, segmentation and A/B testing.' },
  { name: 'Marketing Automation', cat: 'Marketing', icon: Megaphone, desc: 'Trigger-based journeys that nurture leads automatically.' },
  { name: 'Website Builder', cat: 'Marketing', icon: Globe, desc: 'Responsive websites with SEO tools, forms and live analytics.' },
  { name: 'Social & Events', cat: 'Marketing', icon: ShoppingBag, desc: 'Plan events, sell tickets and manage social channels.' },
];

export const SERVICES = [
  { icon: Rocket, title: 'ERP Implementation', desc: 'End-to-end rollout of your business suite — configured to your processes, not the other way around.' },
  { icon: Code2, title: 'Custom Module Development', desc: 'Tailor-made apps, workflows, reports and automations built on a modern, extensible framework.' },
  { icon: Smartphone, title: 'Mobile App Development', desc: 'Native iOS & Android apps connected to your ERP — field sales, warehouse, HR self-service and more.' },
  { icon: Plug, title: 'Integrations & APIs', desc: 'Connect payment gateways, marketplaces, shipping carriers, banks, e-invoicing and legacy systems.' },
  { icon: Database, title: 'Data Migration', desc: 'Safe, validated migration from spreadsheets, Tally, SAP, QuickBooks or any legacy software.' },
  { icon: Cloud, title: 'Cloud Hosting & DevOps', desc: 'Secure, auto-scaling hosting with backups, monitoring and 99.9% uptime SLAs.' },
  { icon: GraduationCap, title: 'Training & Support', desc: 'Role-based training, documentation and a dedicated support desk that actually answers.' },
  { icon: Lightbulb, title: 'ERP Consulting', desc: 'Process audits, gap analysis and digital-transformation roadmaps from certified consultants.' },
];

export const INDUSTRIES = [
  { icon: Factory, name: 'Manufacturing' },
  { icon: ShoppingBag, name: 'Retail & eCommerce' },
  { icon: Warehouse, name: 'Distribution' },
  { icon: Truck, name: 'Logistics' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: School, name: 'Education' },
  { icon: Building2, name: 'Real Estate' },
  { icon: HardHat, name: 'Construction' },
  { icon: Hotel, name: 'Hospitality' },
  { icon: Briefcase, name: 'Professional Services' },
];

export const PROCESS = [
  { step: '01', title: 'Discover', desc: 'Workshops with your team to map processes, pain points and goals.' },
  { step: '02', title: 'Design', desc: 'Solution blueprint, data model and UX prototypes signed off together.' },
  { step: '03', title: 'Develop', desc: 'Agile sprints with demos every two weeks — custom modules, apps and integrations.' },
  { step: '04', title: 'Deploy', desc: 'Data migration, user training and a smooth, zero-downtime go-live.' },
  { step: '05', title: 'Evolve', desc: 'Continuous support, optimization and new features as you grow.' },
];

export const TESTIMONIALS = [
  { quote: 'ORTECHION replaced five disconnected tools with one platform. Month-end closing went from 9 days to 2.', name: 'Priya Raman', role: 'CFO, Northwind Manufacturing' },
  { quote: 'Their warehouse mobile app cut our picking errors by 80%. The team understood our operations from day one.', name: 'Daniel Okafor', role: 'Operations Head, SwiftLogix' },
  { quote: 'From CRM to payroll everything finally talks to each other. Best technology decision we have made.', name: 'Elena Marsh', role: 'CEO, Brightline Retail' },
  { quote: 'Custom modules delivered on time, clean code, and support that responds in minutes — not days.', name: 'Arjun Mehta', role: 'CTO, Medisphere Clinics' },
];

import {
  Target,
  Radar,
  UserRoundCheck,
  MonitorCheck,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  CalendarDays,
  Layers,
  Phone,
  Send,
  Play,
  MapPin,
  Star,
  ShieldCheck,
  Menu,
  X,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

const registry = {
  target: Target,
  radar: Radar,
  mentor: UserRoundCheck,
  monitor: MonitorCheck,
  badge: BadgeCheck,
  spark: Sparkles,
  arrow: ArrowRight,
  arrowUpRight: ArrowUpRight,
  check: Check,
  clock: Clock,
  calendar: CalendarDays,
  layers: Layers,
  phone: Phone,
  telegram: Send,
  play: Play,
  pin: MapPin,
  star: Star,
  shield: ShieldCheck,
  menu: Menu,
  close: X,
  chevron: ChevronDown,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof registry;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export default function Icon({ name, size = 24, className, strokeWidth = 1.8 }: IconProps) {
  const Cmp = registry[name];
  return <Cmp size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}

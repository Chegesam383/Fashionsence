import { cn } from "@/lib/utils";
type Props = {
  children: React.ReactNode;
  className?: string;
};
export default function Container({ children, className }: Props) {
  return (
    <div
      className={cn(
        "mx-auto max-w-[100rem] px-4 py-2 md:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}

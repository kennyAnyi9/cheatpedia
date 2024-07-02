import { Badge } from "@/components/ui/badge";
import { TagProps } from "@/type";

export function Tag({ name, color }: TagProps) {
  return (
    <>
      <Badge className={`bg-[${color}]`}>{name}</Badge>
    </>
  );
}

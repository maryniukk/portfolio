import { NeonGradientCard } from "@/components/magicui/neon-gradient-card"


export async function Card({title}) {
  return (
    <NeonGradientCard className="max-w-sm items-center justify-center text-center">
      <span className="mt-auto mb-auto pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#000000] from-35% to-[#d503ca] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
					{title}
      </span>
    </NeonGradientCard>
  );
}

export function Banner() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-2">
        <div className="flex h-9 items-center justify-center rounded-md bg-black px-4 text-center text-sm font-medium text-white">
          <span>Un mes gratis al crear tu cuenta</span>
          <span className="mx-2 text-white/80">·</span>
          <a href="/site" className="underline underline-offset-2">
            Pruébalo ahora →
          </a>
        </div>
      </div>
    </div>
  );
}

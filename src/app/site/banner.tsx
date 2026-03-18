export function Banner() {
  return (
    <div className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-2">
        <div className="md:hidden">
          <div className="rounded-2xl bg-black px-6 py-5 text-center text-lg font-semibold leading-7 text-white">
            <span>
              Un mes gratis al crear tu cuenta{" "}
              <a href="/site" className="underline underline-offset-4">
                Pruébalo ahora →
              </a>
            </span>
          </div>
        </div>

        <div className="hidden md:flex h-9 items-center justify-center rounded-md bg-black px-4 text-center text-sm font-medium text-white">
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

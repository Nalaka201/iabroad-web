export function EmptyState({ message }: { message: string }) {
  return (
    <div className="py-16 text-center text-muted">
      <div className="mb-3 text-5xl opacity-60" aria-hidden>
        🔍
      </div>
      <p>{message}</p>
    </div>
  );
}

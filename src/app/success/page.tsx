export default function SuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-6xl">✅</div>
        <h1 className="text-3xl font-bold">Payment received!</h1>
        <p className="text-lg text-gray-400">
          Your personalized relocation report is being prepared. You&apos;ll
          receive it at your email within 24 hours.
        </p>
        <p className="text-sm text-gray-500">
          Questions? Email us at{" "}
          <a
            href="mailto:jon@projectgreenbelt.com"
            className="text-emerald-400 hover:text-emerald-300"
          >
            jon@projectgreenbelt.com
          </a>
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
        >
          ← Back to home
        </a>
      </div>
    </main>
  );
}

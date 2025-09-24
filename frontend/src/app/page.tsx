export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        SyncView 메인 화면
      </h1>
      <p className="text-gray-600">
        해외 뉴스를 수집하고 요약하는 플랫폼입니다.
      </p>

      <div className="mt-6 flex gap-4">
        <a href="/auth/login" className="text-blue-600 underline">
          로그인
        </a>
        <a href="/saved" className="text-blue-600 underline">
          저장된 기사
        </a>
        <a href="/profile" className="text-blue-600 underline">
          프로필
        </a>
      </div>
    </main>
  );
}

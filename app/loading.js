export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="relative">
        {/* Main whisper bubble */}
        <div className="relative bg-white shadow-lg rounded-full p-8 animate-pulse border border-gray-300">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-800 rounded-full flex items-center justify-center shadow-md">
            <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>
        
        {/* Whisper ripples */}
        <div className="absolute inset-0 -m-4">
          <div className="w-24 h-24 border-2 border-blue-500/40 rounded-full animate-ping"></div>
        </div>
        <div className="absolute inset-0 -m-8">
          <div className="w-32 h-32 border border-blue-500/25 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
        </div>
        <div className="absolute inset-0 -m-12">
          <div className="w-40 h-40 border border-gray-300/50 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
        </div>
        
        {/* Floating message dots */}
        <div className="absolute -top-8 -left-4">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce shadow-sm" style={{animationDelay: '0.1s'}}></div>
        </div>
        <div className="absolute -top-6 left-6">
          <div className="w-1.5 h-1.5 bg-blue-800 rounded-full animate-bounce shadow-sm" style={{animationDelay: '0.3s'}}></div>
        </div>
        <div className="absolute -top-4 -right-2">
          <div className="w-1 h-1 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <div className="text-blue-800 text-lg font-medium tracking-wide">
            WhisperPost
          </div>
          <div className="text-gray-500 text-sm mt-2 flex items-center justify-center space-x-1">
            <span>Loading whispers</span>
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
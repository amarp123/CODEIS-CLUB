import { Code2, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 bg-slate-950 dark:bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span>CodeIS Club - ISE Department</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
            <span>by CodeIS Team</span>
          </div>

          <div className="text-slate-400">
            © 2025 CodeIS. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Users, Crown, Upload, Bell, LogOut, Edit2, Save, X } from "lucide-react";

interface Member { id?: number; name: string }
interface Team { id: number; name: string; members: Member[] }

export function Dashboard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [teamName, setTeamName] = useState("");
  const [members, setMembers] = useState<Member[]>([{ name: "" }, { name: "" }, { name: "" }]);
  const [team, setTeam] = useState<Team | null>(null);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [authSuccess, setAuthSuccess] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editTeamName, setEditTeamName] = useState("");
  const [editMembers, setEditMembers] = useState<Member[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hack_dashboard");
    if (stored) {
      try {
        const data = JSON.parse(stored) as { username: string; team: Team };
        setUsername(data.username);
        setTeam(data.team);
      } catch {}
    }
  }, []);

  async function handleAuth(e?: React.FormEvent) {
    e?.preventDefault();
    setAuthError(null);
    setAuthSuccess(null);
    setAuthLoading(true);
    try {
      if (!username.trim() || !password.trim() || !teamName.trim()) {
        throw new Error("Please fill username, password and team name");
      }
      const created: Team = {
        id: 1,
        name: teamName.trim(),
        members: members.map((m) => ({ name: m.name.trim() })).filter((m) => m.name),
      };
      setTeam(created);
      localStorage.setItem("hack_dashboard", JSON.stringify({ username, team: created }));
      setAuthSuccess("Signed in successfully!");
    } catch (err: any) {
      const msg = typeof err?.message === "string" ? err.message : "Authentication failed";
      setAuthError(msg);
    } finally {
      setAuthLoading(false);
    }
  }

  function startEdit() {
    setEditTeamName(team?.name || "");
    setEditMembers(team?.members || []);
    setIsEditing(true);
  }

  function cancelEdit() {
    setIsEditing(false);
  }

  function saveEdit() {
    const cleanMembers = editMembers.filter(m => m.name.trim() !== "");
    const updated: Team = { id: 1, name: editTeamName, members: cleanMembers };
    setTeam(updated);
    localStorage.setItem("hack_dashboard", JSON.stringify({ username, team: updated }));
    setIsEditing(false);
  }

  const googleFormUrl = "https://docs.google.com/forms/d/1m0aatvGmukER8ccFi5VWYTAaW4W0VF7KQKzTP55pCDQ/edit";

  if (!team) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
        {/* Animated background elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [90, 0, 90],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              invISion 2025
            </h1>
            <p className="text-slate-400 text-lg">Team Registration Portal</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3 relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-10 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Team Login</h2>
                </div>
                <p className="text-slate-400 mb-8">Register your team and members to get started</p>
                
                <AnimatePresence mode="wait">
                  {authError && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 text-sm text-rose-400 bg-rose-500/10 border border-rose-500/30 rounded-xl px-4 py-3 flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      {authError}
                    </motion.div>
                  )}
                  {authSuccess && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mb-6 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-4 py-3"
                    >
                      ✓ {authSuccess}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400 mb-3">
                        <Crown className="w-4 h-4" />
                        Team Leader Name
                      </label>
                      <input 
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                        placeholder="Your name" 
                        value={username} 
                        onChange={e=>setUsername(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-slate-400 mb-3">Password</label>
                      <input 
                        type="password" 
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" 
                        placeholder="••••••••" 
                        value={password} 
                        onChange={e=>setPassword(e.target.value)} 
                        minLength={4} 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wide text-slate-400 mb-3">Team Name</label>
                    <input 
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" 
                      placeholder="Choose a unique team name" 
                      value={teamName} 
                      onChange={e=>setTeamName(e.target.value)} 
                      required 
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400 mb-3">
                      <Users className="w-4 h-4" />
                      Team Members (3)
                    </label>
                    <div className="space-y-3">
                      {members.map((m: Member, i: number)=> (
                        <motion.input 
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition" 
                          placeholder={`Member ${i+1} name`} 
                          value={m.name} 
                          onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{
                            const copy: Member[] = [...members]; 
                            copy[i] = { name: e.target.value }; 
                            setMembers(copy);
                          }} 
                        />
                      ))}
                    </div>
                  </div>

                  <Button 
                    disabled={authLoading}
                    onClick={(e) => handleAuth(e as any)}
                    className="w-full justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {authLoading ? (
                      <span className="flex items-center gap-2">
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Processing...
                      </span>
                    ) : "Sign In & Continue"}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Info Card */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Bell className="w-6 h-6 text-yellow-400" />
                  Quick Tips
                </h3>
                <ul className="space-y-4 text-slate-300">
                  {[
                    "Use your team name consistently across all platforms",
                    "Add all member names for better coordination",
                    "Prepare your PPT/PDF before submission",
                    "Check announcements regularly for updates"
                  ].map((tip, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">
                        {i+1}
                      </div>
                      <span>{tip}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20">
                <p className="text-slate-300 text-sm">
                  <span className="text-blue-400 font-semibold">Need help?</span> Reach out to the organizing team on the invISion page.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              Team Dashboard
            </h1>
            <p className="text-slate-400">Welcome back, {username}!</p>
          </div>
          <button 
            onClick={()=>{localStorage.removeItem("hack_dashboard"); window.location.reload();}}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Team Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Team Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500" />
              <div className="relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{team.name}</h3>
                      <p className="text-slate-400 text-sm">Team ID: #{team.id}</p>
                    </div>
                  </div>
                  {!isEditing && (
                    <button 
                      onClick={startEdit}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                  )}
                </div>

                {!isEditing ? (
                  <>
                    {/* Team Leader */}
                    <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <Crown className="w-5 h-5 text-yellow-400" />
                        <span className="text-xs uppercase tracking-wide text-yellow-400 font-semibold">Team Leader</span>
                      </div>
                      <p className="text-white text-xl font-semibold">{username}</p>
                    </div>

                    {/* Team Members */}
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-purple-400" />
                        <span className="text-sm uppercase tracking-wide text-slate-400 font-semibold">Team Members</span>
                      </div>
                      <div className="grid md:grid-cols-3 gap-4">
                        {team.members.map((m, i)=>(
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                          >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-50 transition" />
                            <div className="relative p-4 rounded-xl bg-slate-800/70 border border-slate-700 group-hover:border-slate-600 transition">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold mb-3">
                                {m.name.charAt(0).toUpperCase()}
                              </div>
                              <p className="text-white font-medium">{m.name}</p>
                              <p className="text-slate-400 text-xs">Member {i+1}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-slate-400 mb-3">Team Name</label>
                      <input 
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
                        value={editTeamName} 
                        onChange={e=>setEditTeamName(e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wide text-slate-400 mb-3">Team Members</label>
                      <div className="space-y-3">
                        {editMembers.map((m, i)=> (
                          <input 
                            key={i}
                            className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500" 
                            placeholder={`Member ${i+1} name`}
                            value={m.name} 
                            onChange={(e)=>{
                              const copy = [...editMembers]; 
                              copy[i] = { name: e.target.value }; 
                              setEditMembers(copy);
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button 
                        onClick={saveEdit}
                        className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold transition"
                      >
                        <Save className="w-4 h-4" />
                        Save Changes
                      </button>
                      <button 
                        onClick={cancelEdit}
                        className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Announcements */}
            <div className="p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-700/50">
              <div className="flex items-center gap-2 mb-6">
                <Bell className="w-5 h-5 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Announcements</h3>
              </div>
              <AnnouncementList />
            </div>

            {/* Submission Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition duration-500" />
              <div className="relative p-6 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-emerald-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Upload className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-xl font-bold text-white">Submit Project</h3>
                </div>
                <p className="text-slate-400 mb-6 text-sm">
                  Upload your PPT/PDf
                </p>
                <a 
                  href={googleFormUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Upload className="w-5 h-5" />
                  Submit
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function AnnouncementList() {
  const [items] = useState<{id:number; title:string; body:string; created_at:string}[]>([
    { id: 1, title: "Welcome to invISion 2025", body: "Dashboard is now open. Submit your team details and upload your ppt.", created_at: new Date().toISOString() },
    { id: 2, title: "Submission Window", body: "Please ensure your PPT/PDF is submitted before the deadline.", created_at: new Date().toISOString() },
  ]);
  
  return (
    <div className="space-y-3">
      {items.length===0 && <div className="text-slate-400">No announcements yet.</div>}
      {items.map((a, i)=> (
        <motion.div 
          key={a.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/70 transition cursor-pointer"
        >
          <div className="text-white font-semibold mb-1">{a.title}</div>
          <div className="text-slate-400 text-sm leading-relaxed">{a.body}</div>
        </motion.div>
      ))}
    </div>
  );
}

export default Dashboard;
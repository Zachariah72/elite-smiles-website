import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, Search, Users, UserCheck, Download } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

const AdminDashboard = () => {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [members, setMembers] = useState<Tables<"members">[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate("/");
      return;
    }
    if (isAdmin) fetchMembers();
  }, [user, isAdmin, authLoading]);

  const fetchMembers = async () => {
    const { data } = await supabase.from("members").select("*").order("created_at", { ascending: false });
    setMembers(data || []);
    setLoading(false);
  };

  const filtered = members.filter(
    (m) =>
      m.full_name.toLowerCase().includes(search.toLowerCase()) ||
      m.member_no.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase())
  );

  const stats = {
    total: members.length,
    adult: members.filter((m) => m.membership_type === "18+").length,
    junior: members.filter((m) => m.membership_type === "junior").length,
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-foreground">Loading...</div>
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </button>

        <h1 className="font-display text-3xl text-foreground mb-8">Admin Dashboard</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-card border-border">
            <CardContent className="flex items-center gap-4 p-6">
              <Users className="h-10 w-10 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{stats.total}</div>
                <div className="text-sm text-muted-foreground">Total Members</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="flex items-center gap-4 p-6">
              <UserCheck className="h-10 w-10 text-accent" />
              <div>
                <div className="text-2xl font-bold text-foreground">{stats.adult}</div>
                <div className="text-sm text-muted-foreground">18+ Members</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="flex items-center gap-4 p-6">
              <UserCheck className="h-10 w-10 text-primary" />
              <div>
                <div className="text-2xl font-bold text-foreground">{stats.junior}</div>
                <div className="text-sm text-muted-foreground">Junior Members</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, member number, or email..."
            className="pl-10 bg-card border-border text-foreground"
          />
        </div>

        {/* Members Table */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-foreground">Members ({filtered.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-muted-foreground">Photo</TableHead>
                    <TableHead className="text-muted-foreground">Name</TableHead>
                    <TableHead className="text-muted-foreground">Member No</TableHead>
                    <TableHead className="text-muted-foreground">Type</TableHead>
                    <TableHead className="text-muted-foreground">Phone</TableHead>
                    <TableHead className="text-muted-foreground">Email</TableHead>
                    <TableHead className="text-muted-foreground">Joined</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((m) => (
                    <TableRow key={m.id} className="border-border">
                      <TableCell>
                        {m.photo_url ? (
                          <img src={m.photo_url} alt="" className="w-10 h-10 rounded-lg object-cover" />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-muted" />
                        )}
                      </TableCell>
                      <TableCell className="text-foreground font-medium">{m.full_name}</TableCell>
                      <TableCell className="text-primary font-mono text-sm">{m.member_no}</TableCell>
                      <TableCell className="text-foreground">{m.membership_type === "18+" ? "18+" : "Junior"}</TableCell>
                      <TableCell className="text-muted-foreground">{m.phone}</TableCell>
                      <TableCell className="text-muted-foreground">{m.email}</TableCell>
                      <TableCell className="text-muted-foreground">{m.date_joined}</TableCell>
                    </TableRow>
                  ))}
                  {filtered.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                        No members found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

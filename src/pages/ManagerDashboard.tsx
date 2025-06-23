
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Music, Users, TrendingUp, Calendar, Eye, MessageSquare, CheckCircle, XCircle } from "lucide-react";

interface ArtistSubmission {
  id: number;
  name: string;
  category: string;
  location: string;
  feeRange: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  languages: string[];
}

const ManagerDashboard = () => {
  const [submissions] = useState<ArtistSubmission[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      category: "Singer",
      location: "Mumbai",
      feeRange: "₹15,000 - ₹25,000",
      status: "approved",
      submittedDate: "2025-06-20",
      languages: ["Hindi", "English"]
    },
    {
      id: 2,
      name: "Dance Collective",
      category: "Dancers",
      location: "Delhi",
      feeRange: "₹20,000 - ₹35,000",
      status: "pending",
      submittedDate: "2025-06-21",
      languages: ["Hindi", "English", "Punjabi"]
    },
    {
      id: 3,
      name: "The Jazz Band",
      category: "Musicians",
      location: "Bangalore",
      feeRange: "₹25,000 - ₹45,000",
      status: "approved",
      submittedDate: "2025-06-19",
      languages: ["English"]
    },
    {
      id: 4,
      name: "DJ Rhythm",
      category: "DJs",
      location: "Mumbai",
      feeRange: "₹18,000 - ₹30,000",
      status: "pending",
      submittedDate: "2025-06-22",
      languages: ["Hindi", "English", "Marathi"]
    },
    {
      id: 5,
      name: "Comedy Central",
      category: "Comedians",
      location: "Pune",
      feeRange: "₹12,000 - ₹20,000",
      status: "rejected",
      submittedDate: "2025-06-18",
      languages: ["Hindi", "Marathi"]
    }
  ]);

  const stats = {
    totalArtists: submissions.length,
    pendingReview: submissions.filter(s => s.status === 'pending').length,
    approved: submissions.filter(s => s.status === 'approved').length,
    totalBookings: 24
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
    };
    
    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Calendar className="w-4 h-4 text-yellow-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Artistly
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
                Home
              </Link>
              <Link to="/artists" className="text-gray-700 hover:text-purple-600 transition-colors">
                Browse Artists
              </Link>
              <Link to="/onboard" className="text-gray-700 hover:text-purple-600 transition-colors">
                Join as Artist
              </Link>
              <Link to="/dashboard" className="text-purple-600 font-semibold">
                Dashboard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Manager Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Manage artist applications and monitor platform activity
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Artists</CardTitle>
              <Users className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalArtists}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Review</CardTitle>
              <Calendar className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingReview}</div>
              <p className="text-xs text-muted-foreground">
                Requires attention
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approved Artists</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.approved}</div>
              <p className="text-xs text-muted-foreground">
                Active on platform
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalBookings}</div>
              <p className="text-xs text-muted-foreground">
                +18% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Artist Submissions Table */}
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl">Artist Submissions</CardTitle>
            <CardDescription>
              Review and manage artist applications
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Artist/Band Name</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Fee Range</TableHead>
                    <TableHead>Languages</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {submissions.map((submission) => (
                    <TableRow key={submission.id}>
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-2">
                          {getStatusIcon(submission.status)}
                          {submission.name}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{submission.category}</Badge>
                      </TableCell>
                      <TableCell>{submission.location}</TableCell>
                      <TableCell className="font-medium text-purple-600">
                        {submission.feeRange}
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {submission.languages.slice(0, 2).map((lang) => (
                            <Badge key={lang} variant="outline" className="text-xs">
                              {lang}
                            </Badge>
                          ))}
                          {submission.languages.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{submission.languages.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(submission.status)}</TableCell>
                      <TableCell className="text-sm text-gray-600">
                        {new Date(submission.submittedDate).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="w-4 h-4" />
                          </Button>
                          {submission.status === 'pending' && (
                            <>
                              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                                Approve
                              </Button>
                              <Button size="sm" variant="destructive">
                                Reject
                              </Button>
                            </>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <p className="text-sm text-gray-600">
                Showing {submissions.length} submissions
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ManagerDashboard;

import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const JobList = () => {
  const jobs = [
    { id: 1, title: "Nhân viên điều hành Game", location: "Sunworld Hạ Long", salary: "40,000 VND/giờ" }
  ];

  return (
    <div className="container">
      <h2 className="title">Cơ hội việc làm</h2>
      <div className="job-list">
        {jobs.map((job) => (
          <Card key={job.id} className="job-card">
            <CardContent>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-location">{job.location}</p>
              <p className="job-salary">{job.salary}</p>
              <Link to={`/apply/${job.id}`}>
                <Button className="btn">Ứng tuyển ngay</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobList;

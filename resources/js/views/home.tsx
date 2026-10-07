import NavLink from "@/components/NavLink";
import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Home() {
    const [jobs, setJobs] = useState<any[]>([]);
    useEffect(() => {
        fetch("/api/jobs")
            .then((response) => response.json())
            .then((data) => {
                setJobs(data.jobs);
            });
    }, []);
    return (
        <Flex
            padding={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <h1>Jobs</h1>
            <Flex flexDirection="row" gap={4}>
                {jobs.map((job) => (
                    <NavLink href={`/jobs/${job.id}`} isActive={false}>
                        {job.title}
                    </NavLink>
                ))}
            </Flex>
        </Flex>
    );
}

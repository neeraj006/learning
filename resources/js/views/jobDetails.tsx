import { Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function JobDetails() {
    const { jobId } = useParams();
    const [job, setJob] = useState<any>(null);

    useEffect(() => {
        if (!jobId) return;
        fetch(`/api/jobs/${jobId}`)
            .then((response) => response.json())
            .then((data) => {
                setJob(data.job);
            });
    }, [jobId]);

    if (!job) {
        return (
            <Flex
                padding={4}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
            >
                <Text>Loading...</Text>
            </Flex>
        );
    }
    return (
        <Flex
            padding={4}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
        >
            <h1>Job Details</h1>
            <Text>{job?.title}</Text>
            <Text>{job?.description}</Text>
            <Text>{job?.location}</Text>
            <Text>{job?.salary}</Text>
        </Flex>
    );
}

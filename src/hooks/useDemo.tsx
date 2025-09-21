"use client"

import {useEffect, useState} from "react";
import {HostAPI} from "../../@types/globals";

interface YouTrackProject {
    id: string;
    name: string;
    shortName: string;
}

export function useDemo(init = true, host: HostAPI) {
    const [projects, setProjects] = useState<YouTrackProject[]>([]);
    const [isEnabled, setIsEnabled] = useState<any>();
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    async function fetchProjects() {
        setIsLoading(true);
        try {
            const res: YouTrackProject[] = await host.fetchYouTrack(
                'admin/projects?fields=id,name,shortName'
            );
            if (res) {
                setProjects(res)
            }
        } catch (error: any) {
            setIsError(error);
            setProjects([]);
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchManagementState() {
        setIsLoading(true);
        try {
            const res: any = await host.fetchApp('backend-global/demo', {});
            if (res) {
                setIsEnabled(res.storage);
            }
        } catch (error: any) {
            setIsError(error);
            setIsEnabled(false);
        } finally {
            setIsLoading(false);
        }
    }

    async function updateManagementState() {
        try {
            await host.fetchApp('backend-global/demo', {
                method: 'POST',
                body: {enabled: !isEnabled},
            });
            setIsEnabled(!isEnabled);
        } catch (error:any) {
            setIsError(error);
            setIsEnabled(isEnabled);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (!init) return
        fetchProjects();
        fetchManagementState();
    }, []);

    return {
        projects,
        isEnabled,
        isLoading,
        isError,
        updateManagementState
    };
}

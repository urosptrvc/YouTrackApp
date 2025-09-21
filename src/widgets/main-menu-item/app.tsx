"use client"
import styles from './app.module.css';
import Toggle from "@jetbrains/ring-ui-built/components/toggle/toggle";
import Heading from "@jetbrains/ring-ui-built/components/heading/heading";
import List from "@jetbrains/ring-ui-built/components/list/list";
import { HostAPI } from "../../../@types/globals";
import {useDemo} from "../../hooks/useDemo.tsx";
import Alert from "@jetbrains/ring-ui-built/components/alert/alert";
import Loader from "@jetbrains/ring-ui-built/components/loader/loader";

interface Props {
    host: HostAPI;
}

const MenuItemPage = ({ host }: Props) => {
    const {projects, isEnabled, isLoading, isError, updateManagementState} = useDemo(true,host);

    if(!projects || isLoading)  return (
        <div className={styles.app}>
            <Loader message="Loading projects..." />
        </div>
    );

    return (
        <div className={styles.app}>
            <div className={styles.toggleSection}>
                <Toggle
                    checked={isEnabled}
                    disabled={isLoading}
                    onChange={() => updateManagementState()}
                >
                    Enable Test Management System
                </Toggle>
            </div>

            <Heading>Available YouTrack Projects</Heading>

            <List
                data={projects.map(project => ({
                    key: project.shortName,
                    label: project.name,
                    description: `ID: ${project.shortName}`
                }))}
            />
            {isError && (
                <Alert>
                    Failed to load YouTrack projects. Please try again.
                </Alert>
            )}
        </div>
    );
};

export default MenuItemPage;
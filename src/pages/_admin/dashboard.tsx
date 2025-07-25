import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/dashboard")({
	component: Dashboard,
	head: () => ({
		meta: [
			{
				title: "Dashboard | Tourvisto - Travel Agency",
			},
		],
	}),
});

export function Dashboard() {
	return (
		<div>
			<h1>Dashboard</h1>
		</div>
	);
}

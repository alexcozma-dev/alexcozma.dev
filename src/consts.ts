// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Alex Cozma';
export const SITE_DESCRIPTION = 'Engineering physics student.';

export const STATUS_LABELS = {
	'in-progress': 'In progress',
	completed: 'Completed',
	archived: 'Archived',
} as const;

export type ProjectStatus = keyof typeof STATUS_LABELS;

// "Python, PyTorch · Completed", or just "Completed" when the stack is empty.
export function projectMeta(stack: string[], status: ProjectStatus) {
	return [stack.join(', '), STATUS_LABELS[status]].filter(Boolean).join(' · ');
}

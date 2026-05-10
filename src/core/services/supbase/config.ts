import { NODE_ENV, NodeEnv } from '@/types';

import { createClient } from '@supabase/supabase-js';

const isSelfHosted = NODE_ENV === NodeEnv.SELF_HOSTED;

const isStorybook = typeof window !== 'undefined' && window.location.port === '6006';

const createMockClient = () => ({
	auth: {
		signIn: async () => ({
			user: null,
			error: null,
		}),

		signOut: async () => ({
			error: null,
		}),

		onAuthStateChange: () => ({
			data: null,
			error: null,
		}),

		getSession: async () => ({
			data: null,
			error: null,
		}),
	},

	from: () => ({
		select: async () => [],

		insert: async () => ({
			data: null,
			error: null,
		}),

		update: async () => ({
			data: null,
			error: null,
		}),

		delete: async () => ({
			data: null,
			error: null,
		}),
	}),
});

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';

const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

const shouldUseMock = isSelfHosted || isStorybook || !supabaseUrl || !supabaseKey;

const supabase = shouldUseMock ? (createMockClient() as any) : createClient(supabaseUrl, supabaseKey);

export default supabase;

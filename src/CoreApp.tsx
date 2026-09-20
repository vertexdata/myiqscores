import Index from "@/pages/Index";

// The assessment is a self-contained experience. Keeping its shell separate
// prevents editorial routes, data sets, query clients, and toast libraries from
// entering the critical homepage bundle.
const CoreApp = () => <Index />;

export default CoreApp;

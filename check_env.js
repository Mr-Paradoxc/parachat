const requiredEnv = [
    'NEXT_PUBLIC_STREAM_API_KEY',
    'STREAM_CHAT_SECRET',
    'NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY',
    'CLERK_SECRET_KEY'
];

requiredEnv.forEach(env => {
    if (process.env[env]) {
        console.log(`${env} is set.`);
    } else {
        console.log(`${env} is MISSING.`);
    }
});

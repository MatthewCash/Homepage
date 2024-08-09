const clouds = [
    {
        translate: '10% -120%',
        width: '30vw',
        maxWidth: '300px',
        height: '15vh',
        maxHeight: '150px',
        background:
            'conic-gradient(from 0.6turn at 30% 50%, blue, transparent)',
        filter: 'opacity(0.9) blur(8rem)'
    },
    {
        translate: '140% 50%',
        width: '20vw',
        maxWidth: '200px',
        height: '20vh',
        maxHeight: '200px',
        background:
            'conic-gradient(from 0.25turn at 90% 60%, blue, transparent)',
        filter: 'opacity(0.6) blur(5rem)'
    },
    {
        translate: '-30% -30%',
        width: '60vw',
        maxWidth: '600px',
        height: '50vh',
        maxHeight: '500px',
        background:
            'conic-gradient(from 0.5turn at 40% 80%, blue, transparent)',
        filter: 'opacity(0.2) blur(5rem)'
    }
].map((style, i) => (
    <div key={i} className="cloud absolute" style={style}></div>
));

export default () => (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
        <div className="relative">
            <div id="clouds">{clouds}</div>
            <div>
                <h1 className="text-4xl">Coming Soon</h1>
            </div>
        </div>
    </main>
);

import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-20 md:w-20 lg:w-80 min-h-screen bg-gray-900 border-r border-gray-800 flex flex-col">
            {/* Logo */}
            <div className="p-4 lg:p-6 border-b border-gray-800">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">EC</span>
                    </div>
                    <span className="hidden lg:block text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                        EarthConnect
                    </span>
                </div>
            </div>

            {/* Profile Section */}
            <div className="hidden lg:block p-6 border-b border-gray-800">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden shadow">
                        <img src="/src/assets/jessica.svg" alt="Jessica" className="w-full h-full" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-white">Jessica Cambridge</h3>
                            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className="text-sm text-gray-400">College Doctor</p>
                    </div>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                    Guiding the next generation through the journey of health and knowledge!
                </p>
                <div className="flex justify-around">
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">184.3K</div>
                        <div className="text-xs text-gray-400">Posts</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">1.04M</div>
                        <div className="text-xs text-gray-400">Followers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">684</div>
                        <div className="text-xs text-gray-400">Following</div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 p-2 lg:p-6">
                <nav className="space-y-1 lg:space-y-2">
                    <button className="w-full flex items-center justify-center lg:justify-start gap-3 h-12 px-0 lg:px-3 rounded-xl bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                        <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="hidden lg:inline font-medium">Feed</span>
                    </button>
                    <button className="w-full flex items-center justify-center lg:justify-start gap-3 h-12 px-0 lg:px-3 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors">
                        <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="hidden lg:inline font-medium">Messages</span>
                    </button>
                    <button className="w-full flex items-center justify-center lg:justify-start gap-3 h-12 px-0 lg:px-3 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors relative">
                        <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="hidden lg:inline font-medium">Notifications</span>
                        <span className="absolute top-1 right-2 lg:static lg:ml-auto h-4 w-4 lg:h-5 lg:w-5 bg-red-500 text-white rounded-full text-[10px] lg:text-xs flex items-center justify-center font-semibold">
                            12
                        </span>
                    </button>
                    <button className="w-full flex items-center justify-center lg:justify-start gap-3 h-12 px-0 lg:px-3 rounded-xl text-gray-300 hover:bg-gray-800 transition-colors">
                        <svg className="w-6 h-6 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="hidden lg:inline font-medium">Settings</span>
                    </button>
                    
                </nav>

                {/* Contacts */}
                <div className="hidden lg:block mt-6">
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-sm font-medium text-white">Contacts</h4>
                        <button className="text-xs text-gray-400 hover:text-purple-400">View all</button>
                    </div>
                    <div className="space-y-3">
                        {[
                            { name: 'Jack Lozano', status: 'liked your story', avatar: 'jack', dot: 'purple' },
                            { name: 'Vanessa Maccannan', status: 'who you might know..', avatar: 'vanessa', check: true },
                            { name: 'Abie and 109 others', status: 'saw your post', avatar: 'abie', dot: 'orange' },
                            { name: 'Samson Clay', status: 'started following you 1d', avatar: 'samson', check: true }
                        ].map((contact, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={`/src/assets/${contact.avatar}.svg`} alt={contact.name} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white truncate">{contact.name}</p>
                                    <p className="text-xs text-gray-400 truncate">{contact.status}</p>
                                </div>
                                {contact.dot === 'purple' && <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex-shrink-0" />}
                                {contact.dot === 'orange' && <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />}
                                {contact.check && (
                                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Middle = () => {
    const stories = [
        { name: 'Add story', isAdd: true },
        { name: 'Steven', avatar: 'steven' },
        { name: 'Edgar', avatar: 'edgar' },
        { name: 'Joyce', avatar: 'joyce' },
        { name: 'Minnie', avatar: 'minnie' },
        { name: 'Leon', avatar: 'leon' },
        { name: 'Jordan', avatar: 'jordan' }
    ];

    return (
        <div className="flex-1 min-h-screen w-full bg-gray-950">
            {/* Stories Bar */}
            <div className="overflow-x-auto border-b border-gray-800 scrollbar-hide">
                <div className="flex gap-3 sm:gap-4 p-4 sm:p-6 justify-center">
                    {stories.map((story, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 cursor-pointer group flex-shrink-0">
                            <div className="relative">
                                {story.isAdd ? (
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center shadow-lg">
                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </div>
                                    ) : (
                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-gray-800 shadow">
                                        <img 
                                            src={`/src/assets/${story.avatar}.svg`} 
                                            alt={story.name} 
                                            className="w-full h-full" 
                                        />
                                    </div>
                                    )
                                }
                            </div>
                            <span className="text-xs text-gray-300 font-medium group-hover:text-purple-400 transition-colors">
                                {story.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-2xl mx-auto px-4 pb-20 md:pb-8 md:px-6">
                <div className="space-y-4 sm:space-y-6 py-6">
                    {/* Create Post (Desktop only) */}
                    <div className="hidden md:block rounded-lg border border-gray-800 shadow-sm bg-gray-900">
                        <div className="p-4 sm:p-6">
                            <div className="flex gap-3 sm:gap-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 shadow">
                                    <img src="/src/assets/jessica.svg" alt="Jessica" className="w-full h-full" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <textarea
                                        placeholder="What's happening?"
                                        className="w-full min-h-[60px] sm:min-h-[80px] p-3 sm:p-4 bg-gray-800 text-white border-0 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 text-sm placeholder:text-gray-500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sort Filter */}
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-400">Sort by:</span>
                        <button className="text-purple-400 font-medium">Following ↓</button>
                    </div>

                {/* Posts Placeholder */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="rounded-lg border border-gray-800 bg-gray-900 shadow-sm hover:shadow-md transition-shadow p-6">
                            <p className="text-gray-400 text-center py-8">No posts yet. Start following people to see their posts!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const RightSidebar = () => {
    const unreadMessages = [
        { name: 'Sophie Martin', message: 'Hey! Comment vas-tu?', time: '5 min', avatar: 'sophie', online: true },
        { name: 'Lucas Bernard', message: 'Tu as vu le match hier?', time: '12 min', avatar: 'lucas', online: true },
        { name: 'Emma Dubois', message: 'Merci pour ton aide!', time: '1h', avatar: 'emma', online: false },
        { name: 'Thomas Petit', message: 'On se voit demain?', time: '2h', avatar: 'thomas', online: false }
    ];

    const friendSuggestions = [
        { name: 'Alice Johnson', mutualFriends: 12, avatar: 'alice' },
        { name: 'Marc Dupont', mutualFriends: 8, avatar: 'marc' },
        { name: 'Sarah Wilson', mutualFriends: 15, avatar: 'sarah' },
        { name: 'Pierre Lambert', mutualFriends: 6, avatar: 'pierre' }
    ];

    return (
        <div className="hidden xl:block w-80 min-h-screen bg-gray-900 border-l border-gray-800 p-6">
            {/* Messages non lus */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Messages non lus</h3>
                    <span className="text-xs text-gray-400">Tout voir</span>
                </div>
                <div className="space-y-3">
                    {unreadMessages.map((msg, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-800 cursor-pointer transition-colors">
                            <div className="relative flex-shrink-0">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${msg.avatar}`} alt={msg.name} className="w-full h-full" />
                                </div>
                                {msg.online && (
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                                )}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="text-sm font-medium text-white truncate">{msg.name}</h4>
                                    <span className="text-xs text-gray-400 flex-shrink-0">{msg.time}</span>
                                </div>
                                <p className="text-xs text-gray-400 truncate">{msg.message}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Suggestions d'amis */}
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-white">Suggestions d'amis</h3>
                    <span className="text-xs text-gray-400">Voir tout</span>
                </div>
                <div className="space-y-3">
                    {friendSuggestions.map((friend, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800 transition-colors">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${friend.avatar}`} alt={friend.name} className="w-full h-full" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-medium text-white truncate">{friend.name}</h4>
                                <p className="text-xs text-gray-400">{friend.mutualFriends} amis communs</p>
                            </div>
                            <button className="flex-shrink-0 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors">
                                Ajouter
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    return (
        <section className="min-h-screen bg-gray-950">
            {/* Mobile Header */}
            <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 md:hidden">
                <div className="flex items-center justify-between h-14 px-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-xs">EC</span>
                        </div>
                        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            EarthConnect
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="relative h-9 w-9 rounded-xl hover:bg-gray-800 flex items-center justify-center transition-colors">
                            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-[10px] flex items-center justify-center font-semibold">
                                3
                            </span>
                        </button>
                        <button className="relative h-9 w-9 rounded-xl hover:bg-gray-800 flex items-center justify-center transition-colors">
                            <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 h-4 w-4 bg-blue-500 text-white rounded-full text-[10px] flex items-center justify-center font-semibold">
                                2
                            </span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Layout */}
            <div className="flex">
                <div className="hidden md:block">
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <Middle />
                </div>
                <RightSidebar />
            </div>
        </section>
    );
};

export default Home;
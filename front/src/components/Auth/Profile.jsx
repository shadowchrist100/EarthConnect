export default Profile = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-subtle p-4">
            <Card className="w-full max-w-lg shadow-medium">
                <CardHeader className="text-center space-y-2">
                    <CardTitle className="text-2xl font-bold">Configurez votre profil</CardTitle>
                    <CardDescription>
                        Ajoutez une photo de profil pour que vos amis vous reconnaissent
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8">
                    {/* Avatar Upload Section */}
                    <div className="flex flex-col items-center space-y-4">
                        <div className="relative group">
                            <Avatar className="w-32 h-32 border-4 border-primary/20">
                                <AvatarImage src={profileImage || ""} alt="Photo de profil" />
                                <AvatarFallback className="text-2xl bg-gradient-primary text-primary-foreground">
                                    {getInitials()}
                                </AvatarFallback>
                            </Avatar>

                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                            >
                                <Camera className="w-8 h-8 text-white" />
                            </button>
                        </div>

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />

                        <Button
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="gap-2"
                        >
                            <Upload className="w-4 h-4" />
                            {profileImage ? "Changer la photo" : "Ajouter une photo"}
                        </Button>
                    </div>

                    {/* User Info Preview */}
                    <div className="bg-muted/50 rounded-xl p-6 space-y-4">
                        <h3 className="font-semibold text-center text-lg">Aperçu de votre profil</h3>

                        <div className="flex items-center gap-4">
                            <Avatar className="w-16 h-16 border-2 border-primary/20">
                                <AvatarImage src={profileImage || ""} alt="Photo de profil" />
                                <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                                    {getInitials()}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex-1 space-y-1">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4 text-muted-foreground" />
                                    <span className="font-medium">
                                        {userData.firstName} {userData.lastName}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4 text-muted-foreground" />
                                    <span className="text-sm text-muted-foreground">{userData.email}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                        <Button
                            onClick={handleContinue}
                            className="w-full gap-2"
                            variant="gradient"
                            disabled={isLoading}
                        >
                            {isLoading ? "Chargement..." : "Continuer"}
                            <ArrowRight className="w-4 h-4" />
                        </Button>

                        <Button
                            variant="ghost"
                            onClick={handleSkip}
                            className="text-muted-foreground"
                        >
                            Passer cette étape
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
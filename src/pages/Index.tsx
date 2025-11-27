import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const games = [
    { id: 1, name: 'Golden Sevens', category: 'Слоты', jackpot: '2,450,000 ₽', image: '🎰' },
    { id: 2, name: 'Royal Roulette', category: 'Рулетка', jackpot: '890,000 ₽', image: '🎡' },
    { id: 3, name: 'Black Jack Premium', category: 'Карточные', jackpot: '1,200,000 ₽', image: '🃏' },
    { id: 4, name: 'Diamond Slots', category: 'Слоты', jackpot: '3,100,000 ₽', image: '💎' },
    { id: 5, name: 'VIP Poker', category: 'Карточные', jackpot: '1,750,000 ₽', image: '♠️' },
    { id: 6, name: 'Fortune Wheel', category: 'Рулетка', jackpot: '950,000 ₽', image: '🎲' },
  ];

  const bonuses = [
    { title: 'Приветственный бонус', amount: '100%', max: '50,000 ₽', icon: 'Gift' },
    { title: 'Кэшбэк каждую неделю', amount: '15%', max: '20,000 ₽', icon: 'Wallet' },
    { title: 'Фриспины', amount: '250', max: 'спинов', icon: 'Sparkles' },
  ];

  const vipLevels = [
    { level: 'Bronze', benefits: ['Кэшбэк 5%', 'Поддержка 24/7'], minDeposit: '10,000 ₽' },
    { level: 'Silver', benefits: ['Кэшбэк 8%', 'Личный менеджер', 'Быстрый вывод'], minDeposit: '50,000 ₽' },
    { level: 'Gold', benefits: ['Кэшбэк 12%', 'VIP-турниры', 'Эксклюзивные бонусы'], minDeposit: '200,000 ₽' },
    { level: 'Platinum', benefits: ['Кэшбэк 20%', 'Приоритет во всём', 'Люксовые подарки'], minDeposit: '1,000,000 ₽' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-3xl">👑</span>
            <h1 className="text-2xl font-bold text-primary glow-gold">Royal Casino</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => setActiveSection('home')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => setActiveSection('games')} className="text-sm font-medium hover:text-primary transition-colors">Игры</button>
            <button onClick={() => setActiveSection('bonuses')} className="text-sm font-medium hover:text-primary transition-colors">Бонусы</button>
            <button onClick={() => setActiveSection('vip')} className="text-sm font-medium hover:text-primary transition-colors">VIP-клуб</button>
          </nav>

          <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold">
                Войти
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-card border-primary/30">
              <DialogHeader>
                <DialogTitle className="text-2xl text-primary">Добро пожаловать</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Вход</TabsTrigger>
                  <TabsTrigger value="register">Регистрация</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Пароль</Label>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Войти</Button>
                </TabsContent>
                <TabsContent value="register" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">Email</Label>
                    <Input id="reg-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-password">Пароль</Label>
                    <Input id="reg-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="reg-phone">Телефон</Label>
                    <Input id="reg-phone" type="tel" placeholder="+7 (999) 999-99-99" />
                  </div>
                  <Button className="w-full bg-secondary hover:bg-secondary/90">Зарегистрироваться</Button>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      {activeSection === 'home' && (
        <main>
          <section className="relative overflow-hidden py-24 md:py-32">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-background to-background"></div>
            <div className="container relative z-10">
              <div className="mx-auto max-w-3xl text-center space-y-8 animate-fade-in">
                <Badge className="bg-primary/20 text-primary border-primary/30 text-lg px-4 py-2">
                  🔥 Джекпот сегодня: 12,450,000 ₽
                </Badge>
                <h2 className="text-5xl md:text-7xl font-bold glow-gold leading-tight">
                  Королевское казино для настоящих победителей
                </h2>
                <p className="text-xl text-muted-foreground">
                  Эксклюзивные игры, мгновенные выплаты и премиальный сервис
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 animate-pulse-glow">
                    Играть сейчас
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-semibold text-lg px-8 py-6">
                    Получить бонус
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-12">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">2500+</div>
                    <div className="text-sm text-muted-foreground">Игр</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Поддержка</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">15 мин</div>
                    <div className="text-sm text-muted-foreground">Выплаты</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-muted/30">
            <div className="container">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">Популярные игры</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.slice(0, 6).map((game) => (
                  <Card key={game.id} className="group relative overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 card-glow cursor-pointer">
                    <div className="p-6 space-y-4">
                      <div className="text-6xl text-center animate-float">{game.image}</div>
                      <div className="space-y-2">
                        <Badge className="bg-secondary/20 text-secondary border-secondary/30">{game.category}</Badge>
                        <h4 className="text-xl font-bold">{game.name}</h4>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Джекпот:</span>
                          <span className="text-lg font-bold text-primary">{game.jackpot}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                        Играть
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button onClick={() => setActiveSection('games')} size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  Все игры <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </section>
        </main>
      )}

      {activeSection === 'games' && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary glow-gold">Все игры</h2>
            <div className="flex gap-4 mb-8 justify-center flex-wrap">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">Все</Button>
              <Button variant="outline">Слоты</Button>
              <Button variant="outline">Рулетка</Button>
              <Button variant="outline">Карточные</Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {games.map((game) => (
                <Card key={game.id} className="group relative overflow-hidden bg-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 card-glow cursor-pointer">
                  <div className="p-6 space-y-4">
                    <div className="text-6xl text-center animate-float">{game.image}</div>
                    <div className="space-y-2">
                      <Badge className="bg-secondary/20 text-secondary border-secondary/30">{game.category}</Badge>
                      <h4 className="text-xl font-bold">{game.name}</h4>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Джекпот:</span>
                        <span className="text-lg font-bold text-primary">{game.jackpot}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-colors">
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'bonuses' && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary glow-gold">Бонусы и акции</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {bonuses.map((bonus, idx) => (
                <Card key={idx} className="bg-card border-primary/30 card-glow p-8 text-center space-y-6 hover:scale-105 transition-transform">
                  <div className="mx-auto w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={bonus.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold">{bonus.title}</h3>
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-primary glow-gold">{bonus.amount}</div>
                    <div className="text-muted-foreground">до {bonus.max}</div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Получить</Button>
                </Card>
              ))}
            </div>
            <Card className="bg-gradient-to-r from-primary/20 to-secondary/20 border-primary/30 p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">Эксклюзивное предложение</h3>
              <p className="text-xl mb-6">Промокод <span className="text-primary font-bold text-2xl">ROYAL2024</span> - дополнительный кэшбэк 10%</p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">Активировать промокод</Button>
            </Card>
          </div>
        </section>
      )}

      {activeSection === 'vip' && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary glow-gold">VIP-клуб Royal</h2>
            <p className="text-center text-xl text-muted-foreground mb-12">Эксклюзивные привилегии для избранных</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vipLevels.map((vip, idx) => (
                <Card key={idx} className={`bg-card border-2 p-8 space-y-6 hover:scale-105 transition-transform ${
                  idx === 3 ? 'border-primary card-glow' : 'border-primary/30'
                }`}>
                  <div className="text-center">
                    <Badge className={`text-lg px-4 py-2 ${
                      idx === 0 ? 'bg-orange-900/30 text-orange-400 border-orange-600/30' :
                      idx === 1 ? 'bg-gray-400/30 text-gray-300 border-gray-400/30' :
                      idx === 2 ? 'bg-primary/30 text-primary border-primary/30' :
                      'bg-purple-600/30 text-purple-300 border-purple-500/30'
                    }`}>
                      {vip.level}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    {vip.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <Icon name="Check" className="text-secondary mt-1" size={18} />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <div className="text-xs text-muted-foreground mb-1">Минимальный депозит:</div>
                    <div className="text-xl font-bold text-primary">{vip.minDeposit}</div>
                  </div>
                  <Button className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground">
                    Подробнее
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="fixed bottom-8 right-8 z-50">
        <Button size="lg" className="rounded-full w-16 h-16 shadow-lg bg-secondary hover:bg-secondary/90 animate-pulse-glow">
          <Icon name="MessageCircle" size={24} />
        </Button>
      </div>

      <footer className="border-t border-border/40 py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">👑</span>
                <h3 className="text-xl font-bold text-primary">Royal Casino</h3>
              </div>
              <p className="text-sm text-muted-foreground">Премиальное онлайн-казино с лучшими играми и бонусами</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">О нас</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">О компании</li>
                <li className="hover:text-primary cursor-pointer">Лицензия</li>
                <li className="hover:text-primary cursor-pointer">Ответственная игра</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-primary cursor-pointer">FAQ</li>
                <li className="hover:text-primary cursor-pointer">Правила</li>
                <li className="hover:text-primary cursor-pointer">Контакты</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-primary">Платежи</h4>
              <div className="flex gap-2 text-3xl">
                <span>💳</span>
                <span>💰</span>
                <span>🏦</span>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-8 pt-8 text-center text-sm text-muted-foreground">
            © 2024 Royal Casino. Все права защищены. 18+
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [beforeAfterValue, setBeforeAfterValue] = useState([50]);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">Мастерская Реставрации</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#hero" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="art-nouveau-btn art-nouveau-btn-ginkgo">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm">Профессиональная реставрация</Badge>
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-primary leading-tight">
                  Возвращаем жизнь антикварной мебели
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Мастерская с 20-летним опытом. Восстанавливаем уникальные предметы интерьера 
                  с сохранением их исторической ценности и художественной значимости.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="art-nouveau-btn art-nouveau-btn-ginkgo bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Palette" size={20} className="mr-2" />
                  Заказать реставрацию
                </Button>
                <Button size="lg" variant="outline" className="art-nouveau-outline-btn art-nouveau-outline-floral">
                  <Icon name="Image" size={20} className="mr-2" />
                  Посмотреть работы
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted art-nouveau-frame">
                <img 
                  src="/img/c9f6bc2b-ac91-4683-b25b-7f0bd8f28e4b.jpg" 
                  alt="Мастерская реставрации" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-heading font-bold">20+</div>
                <div className="text-sm">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/20 via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-secondary to-primary transform -rotate-12"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-accent opacity-60"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Как это работает</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мы разработали уникальный процесс реставрации, сочетающий традиционные техники 
              с современными методами сохранения антикварных предметов
            </p>
          </div>
          
          <div className="grid lg:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            {[
              {
                step: "01",
                title: "Диагностика",
                description: "Детальный осмотр и оценка состояния предмета. Фотофиксация повреждений и составление плана реставрации.",
                icon: "Search",
                color: "from-primary to-primary/70"
              },
              {
                step: "02", 
                title: "Очистка",
                description: "Бережное удаление загрязнений и старых покрытий с использованием безопасных для антиквариата методов.",
                icon: "Droplets",
                color: "from-secondary to-secondary/70"
              },
              {
                step: "03",
                title: "Реставрация",
                description: "Восстановление структуры, замена утраченных элементов, укрепление конструкции традиционными способами.",
                icon: "Hammer",
                color: "from-accent to-accent/70"
              },
              {
                step: "04",
                title: "Финишная обработка",
                description: "Нанесение защитных покрытий, полировка, патинирование для придания аутентичного вида.",
                icon: "Sparkles",
                color: "from-primary to-secondary"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <Card className="art-nouveau-organic-card h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center relative z-10`}>
                      <Icon name={item.icon as any} size={28} className="text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-3xl font-heading font-bold text-primary/30">{item.step}</span>
                      <h3 className="text-xl font-heading font-semibold text-primary mt-2">{item.title}</h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
                
                {/* Step connector */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8 z-20">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <Icon name="ArrowRight" size={16} className="text-white" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background"></div>
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('/img/cb777fe5-532b-41ea-935a-d8bc725020a1.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Что делает нашу мастерскую особенной и почему клиенты доверяют нам свои драгоценные предметы
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: "Единение с природой",
                description: "Используем только натуральные материалы: льняное масло, пчелиный воск, натуральные пигменты. Работаем в гармонии с природными свойствами дерева.",
                icon: "Leaf",
                features: ["Натуральные материалы", "Экологичные технологии", "Уважение к природе дерева"]
              },
              {
                title: "Мастерство поколений",
                description: "Техники передаются от мастера к ученику. Сохраняем традиционные методы, которые использовались веками для создания шедевров.",
                icon: "Users",
                features: ["Семейные традиции", "Опыт 3 поколений", "Секретные техники"]
              },
              {
                title: "Индивидуальный подход",
                description: "Каждый предмет уникален, как живое существо. Изучаем его историю, характер древесины, особенности конструкции.",
                icon: "Heart",
                features: ["Персональный план", "Глубокий анализ", "Уважение к истории"]
              }
            ].map((advantage, index) => (
              <Card key={index} className="art-nouveau-nature-card group hover:shadow-2xl transition-all duration-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center art-nouveau-icon-bg">
                      <Icon name={advantage.icon as any} size={32} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-primary mb-3">{advantage.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                    {advantage.description}
                  </p>
                  
                  <div className="space-y-3">
                    {advantage.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mr-3"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Service Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-secondary/5"></div>
          <svg className="absolute bottom-0 left-0 w-full h-32 text-muted/20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" fill="currentColor"></path>
          </svg>
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 art-nouveau-badge">Мобильный сервис</Badge>
                <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                  Мы приезжаем к вам и работаем на месте
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Не хотите расставаться с любимым предметом? Наши мастера приедут к вам домой 
                  и выполнят реставрацию в комфортной для вас обстановке.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: "Home", title: "У вас дома", desc: "Работаем в вашем пространстве" },
                  { icon: "Shield", title: "Безопасно", desc: "Защищаем окружающие предметы" },
                  { icon: "Clock", title: "Удобно", desc: "В удобное для вас время" },
                  { icon: "Truck", title: "Мобильно", desc: "Привозим все инструменты" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 art-nouveau-feature">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon as any} size={20} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-primary text-sm">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="art-nouveau-btn art-nouveau-btn-ginkgo bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Вызвать мастера
                </Button>
                <Button size="lg" variant="outline" className="art-nouveau-outline-btn art-nouveau-outline-floral">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-muted art-nouveau-organic-frame">
                <img 
                  src="/img/d857a887-f528-4b4c-94be-26c43301f7e8.jpg" 
                  alt="Мастер за работой" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-secondary to-secondary/80 text-white p-6 rounded-2xl shadow-lg art-nouveau-floating-card">
                <div className="text-center">
                  <Icon name="Star" size={24} className="mx-auto mb-2 text-yellow-300" />
                  <div className="text-lg font-heading font-bold">5.0</div>
                  <div className="text-xs opacity-90">Рейтинг мастеров</div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg art-nouveau-floating-card">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name="CheckCircle" size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-heading font-semibold text-primary">500+</div>
                    <div className="text-xs text-muted-foreground">Выездов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный цикл реставрационных работ с использованием традиционных техник и современных материалов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Hammer",
                title: "Реставрация мебели",
                description: "Восстановление антикварной и винтажной мебели с сохранением оригинального стиля",
                features: ["Ремонт каркаса", "Восстановление фурнитуры", "Реставрация покрытий"]
              },
              {
                icon: "Brush",
                title: "Художественная роспись",
                description: "Восстановление декоративных элементов и художественной росписи на предметах интерьера",
                features: ["Золочение", "Патинирование", "Роспись по дереву"]
              },
              {
                icon: "Wrench",
                title: "Механизмы и фурнитура",
                description: "Ремонт и изготовление механизмов, замков, ручек и другой фурнитуры",
                features: ["Изготовление деталей", "Полировка металла", "Замена механизмов"]
              }
            ].map((service, index) => (
              <Card key={index} className="art-nouveau-card art-nouveau-card-lily hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section id="portfolio" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">До и После</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших работ — от состояния находки до полного восстановления
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="art-nouveau-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-muted">
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src="/img/89cd373b-3bb2-4dfc-991c-6676b2ced374.jpg" 
                      alt="Реставрация мебели до и после" 
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-background/80 to-transparent"
                      style={{ left: `${beforeAfterValue[0]}%`, width: '4px' }}
                    />
                  </div>
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-3/4">
                    <div className="flex items-center justify-between mb-4 text-sm font-medium">
                      <span className="bg-background/90 px-3 py-1 rounded-full">До реставрации</span>
                      <span className="bg-background/90 px-3 py-1 rounded-full">После реставрации</span>
                    </div>
                    <Slider
                      value={beforeAfterValue}
                      onValueChange={setBeforeAfterValue}
                      max={100}
                      step={1}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мнения тех, кто доверил нам восстановление своих дорогих сердцу предметов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Коллекционер антиквариата",
                rating: 5,
                text: "Восстановили старинный секретер XVIII века. Работа выполнена безупречно, сохранили все исторические детали. Рекомендую!"
              },
              {
                name: "Михаил Иванов",
                role: "Владелец ресторана",
                text: "Реставрировали мебель для нашего ресторана в историческом стиле. Результат превзошел все ожидания. Очень профессионально!"
              },
              {
                name: "Елена Смирнова",
                role: "Дизайнер интерьеров",
                text: "Сотрудничаем уже несколько лет. Всегда качественная работа в срок. Мастера понимают ценность каждого предмета."
              }
            ].map((review, index) => (
              <Card key={index} className="art-nouveau-card">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Icon 
                        key={i} 
                        name="Star" 
                        size={16} 
                        className={`${i < (review.rating || 5) ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовы обсудить ваш проект реставрации? Свяжитесь с нами удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-8">
              <Card className="art-nouveau-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2">Адрес мастерской</h3>
                      <p className="text-muted-foreground">ул. Мастеров, 12<br />Москва, 101000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="art-nouveau-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2">Телефон</h3>
                      <p className="text-muted-foreground">+7 (495) 123-45-67<br />+7 (926) 987-65-43</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="art-nouveau-card">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold mb-2">Режим работы</h3>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб: 10:00 - 16:00<br />Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="art-nouveau-card">
                <CardHeader>
                  <CardTitle className="font-heading">Оставить заявку</CardTitle>
                  <CardDescription>Опишите ваш проект, и мы свяжемся с вами в течение дня</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20" 
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Описание работы</label>
                    <textarea 
                      className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 h-24 resize-none" 
                      placeholder="Опишите что нужно отреставрировать..."
                    />
                  </div>
                  <Button className="w-full art-nouveau-btn art-nouveau-btn-ginkgo bg-primary text-primary-foreground hover:bg-primary/90">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="font-heading text-2xl font-bold mb-4">Мастерская Реставрации</h3>
            <p className="text-primary-foreground/80 mb-4">
              Возвращаем жизнь антикварной мебели с 2004 года
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Facebook" size={24} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
              <Icon name="Mail" size={24} className="text-primary-foreground/60 hover:text-primary-foreground cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .art-nouveau-btn {
          position: relative;
          border-radius: 30px;
          overflow: hidden;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #6B7A84 0%, #A79379 100%);
          transition: all 0.4s ease;
          padding: 12px 24px !important;
        }
        
        .art-nouveau-btn::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 32px;
          background: conic-gradient(from 0deg, 
            rgba(167, 147, 121, 0.8), 
            rgba(107, 122, 132, 0.8), 
            rgba(167, 147, 121, 0.8));
          z-index: -1;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .art-nouveau-btn::after {
          content: '';
          position: absolute;
          top: 3px;
          left: 8px;
          right: 8px;
          bottom: 3px;
          border-radius: 25px;
          background: 
            radial-gradient(ellipse at 20% 30%, rgba(255, 255, 255, 0.3) 0%, transparent 40%),
            radial-gradient(ellipse at 80% 70%, rgba(255, 255, 255, 0.2) 0%, transparent 50%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .art-nouveau-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 12px 30px rgba(107, 122, 132, 0.3),
            0 4px 8px rgba(167, 147, 121, 0.2);
        }
        
        .art-nouveau-btn:hover::before {
          opacity: 1;
        }
        
        .art-nouveau-btn:hover::after {
          opacity: 1;
        }
        
        .art-nouveau-outline-btn {
          border: 2px solid transparent;
          border-radius: 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          background: linear-gradient(white, white) padding-box,
                      conic-gradient(from 45deg, #6B7A84, #A79379, #6B7A84, #A79379) border-box;
          padding: 12px 24px !important;
        }
        
        .art-nouveau-outline-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 28px;
          background: 
            radial-gradient(circle at 25% 25%, rgba(167, 147, 121, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(107, 122, 132, 0.1) 0%, transparent 50%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .art-nouveau-outline-btn::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(167, 147, 121, 0.5), transparent);
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.4s ease;
        }
        
        .art-nouveau-outline-btn:hover {
          background: linear-gradient(135deg, #6B7A84, #A79379) padding-box,
                      conic-gradient(from 45deg, #6B7A84, #A79379, #6B7A84, #A79379) border-box;
          color: white;
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 20px rgba(107, 122, 132, 0.25);
        }
        
        .art-nouveau-outline-btn:hover::before {
          opacity: 1;
        }
        
        .art-nouveau-outline-btn:hover::after {
          transform: translate(-50%, -50%) scale(8);
          opacity: 0.3;
        }
        
        .art-nouveau-card {
          border-radius: 20px;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
          background: white;
        }
        
        .art-nouveau-card:hover {
          transform: translateY(-4px);
          border-color: #6B7A84;
          box-shadow: 0 12px 30px rgba(107, 122, 132, 0.15);
        }
        
        .art-nouveau-frame {
          position: relative;
          border: 3px solid #A79379;
          border-radius: 25px;
        }
        
        .art-nouveau-frame::before {
          content: '';
          position: absolute;
          top: -6px;
          left: -6px;
          right: -6px;
          bottom: -6px;
          background: linear-gradient(45deg, #6B7A84, #A79379, #6B7A84);
          border-radius: 28px;
          z-index: -1;
        }
        
        /* Enhanced Art Nouveau Elements */
        .art-nouveau-organic-card {
          border-radius: 30px;
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, #6B7A84, #A79379, #6B7A84) border-box;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }
        
        .art-nouveau-organic-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 20%, rgba(167, 147, 121, 0.1) 0%, transparent 50%),
                      radial-gradient(circle at 70% 80%, rgba(107, 122, 132, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }
        
        .art-nouveau-organic-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(107, 122, 132, 0.2);
        }
        
        .art-nouveau-nature-card {
          border-radius: 25px;
          border: 1px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(45deg, #6B7A84, #A79379) border-box;
          position: relative;
          overflow: hidden;
        }
        
        .art-nouveau-nature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(ellipse at top left, rgba(167, 147, 121, 0.15) 0%, transparent 40%),
            radial-gradient(ellipse at bottom right, rgba(107, 122, 132, 0.15) 0%, transparent 40%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .art-nouveau-nature-card:hover::before {
          opacity: 1;
        }
        
        .art-nouveau-icon-bg {
          position: relative;
          background: radial-gradient(circle, rgba(167, 147, 121, 0.2), rgba(107, 122, 132, 0.2));
          border: 2px solid rgba(167, 147, 121, 0.3);
        }
        
        .art-nouveau-icon-bg::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: conic-gradient(from 0deg, #6B7A84, #A79379, #6B7A84);
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .group:hover .art-nouveau-icon-bg::before {
          opacity: 0.3;
        }
        
        .art-nouveau-organic-frame {
          position: relative;
          border: 4px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      conic-gradient(from 0deg, #6B7A84, #A79379, #6B7A84, #A79379) border-box;
          border-radius: 40px;
        }
        
        .art-nouveau-organic-frame::after {
          content: '';
          position: absolute;
          top: -8px;
          left: -8px;
          right: -8px;
          bottom: -8px;
          background: conic-gradient(from 0deg, 
            rgba(107, 122, 132, 0.3), 
            rgba(167, 147, 121, 0.3), 
            rgba(107, 122, 132, 0.3));
          border-radius: 44px;
          z-index: -1;
          filter: blur(8px);
          opacity: 0.7;
        }
        
        .art-nouveau-floating-card {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box,
                      linear-gradient(135deg, rgba(167, 147, 121, 0.5), rgba(107, 122, 132, 0.5)) border-box;
          backdrop-filter: blur(10px);
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .art-nouveau-badge {
          border: 1px solid rgba(167, 147, 121, 0.4);
          background: linear-gradient(135deg, rgba(167, 147, 121, 0.1), rgba(107, 122, 132, 0.1));
          color: #6B7A84;
          backdrop-filter: blur(5px);
        }
        
        .art-nouveau-feature {
          position: relative;
          padding: 12px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.4));
          border: 1px solid rgba(167, 147, 121, 0.2);
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
        }
        
        .art-nouveau-feature:hover {
          transform: translateY(-2px);
          border-color: rgba(107, 122, 132, 0.4);
          box-shadow: 0 8px 20px rgba(107, 122, 132, 0.15);
        }
        
        /* Nature-inspired backgrounds */
        .nature-bg-leaves {
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(167, 147, 121, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 80% 70%, rgba(107, 122, 132, 0.1) 0%, transparent 30%),
            radial-gradient(circle at 40% 90%, rgba(167, 147, 121, 0.05) 0%, transparent 40%);
        }
        
        /* Organic flowing lines */
        .art-nouveau-divider {
          height: 2px;
          background: linear-gradient(90deg, 
            transparent 0%, 
            rgba(167, 147, 121, 0.3) 20%, 
            rgba(107, 122, 132, 0.5) 50%, 
            rgba(167, 147, 121, 0.3) 80%, 
            transparent 100%);
          border-radius: 2px;
          margin: 2rem 0;
        }
        
        /* Ginkgo leaf inspired decorative elements */
        .art-nouveau-btn-ginkgo::before {
          content: '';
          position: absolute;
          top: -1px;
          left: 8px;
          width: 12px;
          height: 12px;
          background: 
            radial-gradient(ellipse 60% 80% at 50% 20%, 
              rgba(255, 255, 255, 0.4) 0%, 
              rgba(255, 255, 255, 0.2) 40%, 
              transparent 70%);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          transform: rotate(-15deg);
          opacity: 0.7;
        }
        
        .art-nouveau-btn-ginkgo::after {
          content: '';
          position: absolute;
          bottom: -1px;
          right: 8px;
          width: 10px;
          height: 10px;
          background: 
            radial-gradient(ellipse 70% 90% at 50% 10%, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(255, 255, 255, 0.1) 50%, 
              transparent 80%);
          border-radius: 50% 50% 50% 50% / 70% 70% 30% 30%;
          transform: rotate(25deg);
          opacity: 0.6;
        }
        
        /* Floral pattern for outline buttons */
        .art-nouveau-outline-floral::before {
          content: '';
          position: absolute;
          top: 4px;
          left: 6px;
          width: 8px;
          height: 8px;
          background: 
            conic-gradient(from 0deg at 50% 50%, 
              transparent 0deg, 
              rgba(107, 122, 132, 0.3) 60deg, 
              transparent 120deg,
              rgba(167, 147, 121, 0.3) 180deg,
              transparent 240deg,
              rgba(107, 122, 132, 0.3) 300deg,
              transparent 360deg);
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .art-nouveau-outline-floral:hover::before {
          opacity: 1;
        }
        
        /* Lily-inspired elements for cards */
        .art-nouveau-card-lily {
          position: relative;
          overflow: hidden;
        }
        
        .art-nouveau-card-lily::before {
          content: '';
          position: absolute;
          top: -20px;
          right: -20px;
          width: 40px;
          height: 40px;
          background: 
            radial-gradient(ellipse 80% 60% at 30% 70%, 
              rgba(167, 147, 121, 0.1) 0%, 
              rgba(167, 147, 121, 0.05) 50%, 
              transparent 80%);
          border-radius: 50% 20% 80% 30%;
          transform: rotate(45deg);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .art-nouveau-card-lily:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
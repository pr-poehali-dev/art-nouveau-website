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
            <Button className="art-nouveau-btn">
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
                <Button size="lg" className="art-nouveau-btn bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Palette" size={20} className="mr-2" />
                  Заказать реставрацию
                </Button>
                <Button size="lg" variant="outline" className="art-nouveau-outline-btn">
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
              <Card key={index} className="art-nouveau-card hover:shadow-lg transition-all duration-300">
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
                  <Button className="w-full art-nouveau-btn bg-primary text-primary-foreground hover:bg-primary/90">
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
          border-radius: 25px;
          overflow: hidden;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #6B7A84 0%, #A79379 100%);
          transition: all 0.3s ease;
        }
        
        .art-nouveau-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(107, 122, 132, 0.3);
        }
        
        .art-nouveau-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .art-nouveau-btn:hover::before {
          left: 100%;
        }
        
        .art-nouveau-outline-btn {
          border: 2px solid #6B7A84;
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .art-nouveau-outline-btn:hover {
          background: #6B7A84;
          color: white;
          transform: translateY(-2px);
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
      `}</style>
    </div>
  );
}
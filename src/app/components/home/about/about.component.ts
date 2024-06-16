import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  backend: string[] = [
    'Ruby on Rails', 
    'PHP', 
    'Python',
    'NodeJS', 
    'MySQL', 'PostgreSQL',
    'MongoDB', 
    'Firebase',
    'SQL',
    'SQL Server',
    'MySQL',
    'PostgresSQL',
    'NoSQL',
    'MongoDB',
    'Git',
  ];
  frontend: string[] = [
    'JavaScript',
    'TypeScript',
     'React', 
     'Redux',
      'HTML', 
      'CSS', 
      'Styled Components', 
      'Material-UI', 
      'Bootstrap', 
      'Tailwind'
  ];
  infrastructure: string[] = [
    'AWS',
    'Heroku',
    'CI/CD',
    'Docker',
    'Redis',
  ];
  testing: string[] = ['Jtest', 'Mocha', 'Rspec'];

  constructor(public analyticsService: AnalyticsService) {}

  ngOnInit(): void {}
}

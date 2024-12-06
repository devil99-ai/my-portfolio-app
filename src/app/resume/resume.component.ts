import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-resume',
  imports: [AccordionModule,CommonModule],
  templateUrl: './resume.component.html',
  styleUrls:[ './resume.component.css']
})
export class ResumeComponent {

  workExperience = [
    {
      title: 'Load Balancer (F5-LTM, ASM)',
      duration: 'Nov 2021 – Present',
      details: [
        {
          points: [
            'Managed all Big-IP network IP services and design.',
            'Deployed and managed BIG-IQ for comprehensive load balancing solutions.',
            'Provided network engineering services in a large SharePoint environment.',
            'Expert in F5 LTM, ASM, and SSL offloading.',
            'Strong understanding of DNS, SSL/TLS encryption.',
            'Configured WAF for learning, analyzing, and blocking attacks like HTTP parser attacks, SQL injection, cross-site scripting, and password attacks.',
            'Automated SSL renewal using BIG-IQ.',
            'Automated WAF processes for adding IP addresses to IP blocking using Python.',
          ],
        },
      ],
    },
    {
      title: 'Elastic Search',
      duration: 'Nov 2021 – Present',
      details: [
        {
          points: [
            'Indexed, stored, searched, and analyzed large volumes of data in near real-time.',
            'Extracted metrics from incoming connections in real-time.',
            'Monitored and analyzed external traffic, hits, and troubleshooting issues.',
            'Upgraded and deployed Elasticsearch in production.',
            'Integrated multiple network devices like WAF, Cisco switches, routers, and firewalls for better syslog understanding.',
            'Set up anomaly detection and alerting for critical attacks using SIEM.',
            'Automated Elasticsearch indexes using Python for generating monthly and weekly reports.',
            'Configured Elasticsearch ML jobs to generate reports of incoming attacks.',
            'Troubleshot critical Elasticsearch infrastructure issues in the backend and frontend.',
          ],
        },
      ],
    },
    {
      title: 'Other Contributions',
      duration: 'Nov 2021 – Present',
      details: [
        {
          points: [
            'Developed Python scripts for monthly patch updates on Linux servers.',
            'Created GCP Cortex integrations for VMs with multiple operating systems using Python.',
            'Automated Google Cloud tasks using Terraform, including creating VCPs, VMs, Kubernetes Engines, and Buckets.',
            'Performed web application testing using Selenium and Java, capturing screenshots and generating reports.',
            'Automated testing processes using Testing, JUnit, and Cucumber frameworks.',
            'Used Cypress with Node.js for UI automation testing with a simple interface.',
            'Automated database tasks (CRUD operations) using JDBC and Java.',
            'Utilized Selenium Grid to run test cases through Docker.',
          ],
        },
      ],
    },
  ];

 //education
 education = [
  {
    degree: 'Secondary',
    institution: 'Berhamore J.N.Academy, Berhampore',
    duration: 'Jan 2014 – Mar 2015',
    percentage: '83.5%',
  },
  {
    degree: 'HSC',
    institution: 'Berhamore J.N.Academy, Berhampore',
    duration: 'May 2015 – May 2017',
    percentage: '75%',
  },
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'Heritage Institute of Technology, Kolkata',
    duration: 'Aug 2017 – Aug 2021',
    percentage: '60%',
  },
];
//skills
skills = [
  'Infrastructure Automation',
  'Cloud Platforms (AWS, GCP - Beginner)',
  'Scripting (Python (Flask, Django), Java, Node.js)',
  'Network Security (Checkpoint, F5, Cisco, FMC, Switches and Router)',
  'Automation tools and testing frameworks (e.g., Selenium, Java, Node.js, Cucumber, Cypress, TestNG, JUnit)',
  'Machine Learning and AI',
  'API Testing using Rest Assured, Postman, and JMeter for Load/Stress Testing',
  'Cloud Automation in AWS',
  'Docker and Jenkins',
];



  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle('Souvik Sharma - Portfolio');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href','/resume.pdf');
    link.setAttribute('download','resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

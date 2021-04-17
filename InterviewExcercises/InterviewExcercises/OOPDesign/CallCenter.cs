using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewExcercises.OOPDesign
{
   public class CallCenter
    {
        public TeamLeader teamLeader = TeamLeader.GetTeamLeader;
        public ProjectManager projectManager = ProjectManager.GetProjectManager;
        public Employee employee1 = new Employee();
        public Employee employee2 = new Employee();
        public Employee employee3 = new Employee();
    

        public List<Employee> FillEMployees()
        {
            List<Employee> employees = new List<Employee>();
            employees.Add(employee1);
            employees.Add(employee2);
            employees.Add(employee3);
            employees.Add(teamLeader);
            employees.Add(projectManager);
            return employees;
        }



    }
    public enum EmployeeRole
    { 
        Fresher,
        TeamLeader,
        ProjectManager
    }
    public class Employee
    { 
        public string Name { get; set; }
        public string Surname { get; set; }
        public string Role { get; set; }
    }
    public  class TeamLeader:Employee
    {
        private static  TeamLeader _instance;
        private  TeamLeader( )
        {
        }
        public static TeamLeader GetTeamLeader
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new TeamLeader();
                }
                return _instance;
            }
        }
    }

    public class ProjectManager:Employee
    {
        private static ProjectManager _instance;
        private ProjectManager()
        {
        }
        public static ProjectManager GetProjectManager
        {
            get
            {
                if (_instance == null)
                {
                    _instance = new ProjectManager();
                }
                return _instance;
            }
        }
    }

    public class EmployeeTelephoneCall
    {
        public Employee Employee { get; set; }
        public TelephoneCall TelephoneCall { get; set; }
    }
    public class TelephoneCall
    {
        public string From { get; set; }
        public double Duration { get; set; }
        public DateTime StartDate { get; set; }
    }


}

using LearnAngularEntitiesListApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LearnAngularEntitiesListApp.Services
{
    public class InstructorService
    {
        private List<Instructor> _instructors = new List<Instructor>
        {
            new Instructor()
                {
                    Id = "1",
                    Name = "Ted",
                    Age = 20
                },
                new Instructor()
                {
                    Id = "2",
                    Name = "Alice",
                    Age = 25
                },
                new Instructor()
                {
                    Id = "3",
                    Name = "Bob",
                    Age = 19
                }
        };

        public InstructorService()
        {

        }

        internal Task<Instructor> GetInstructorByIdAsync(string id)
        {
            var existing = _instructors.FirstOrDefault(x => x.Id == id);

            if (existing == null)
            {
                throw new InvalidOperationException($"Instructor with id={id} not found");
            }

            return Task.FromResult(existing);
        }

        public Task<IEnumerable<Instructor>> GetAllInstructorsAsync()
        {
            return Task.FromResult(_instructors.AsEnumerable());
        }

        public Task AddInstructor(Instructor instructor)
        {
            instructor.Id = Guid.NewGuid().ToString();
            _instructors.Add(instructor);
            return Task.CompletedTask;
        }

        internal Task UpdateInstructor(Instructor instructor)
        {
            var existing = _instructors.FirstOrDefault(x => x.Id == instructor.Id);

            if (existing == null)
            {
                throw new InvalidOperationException($"Instructor with id={instructor.Id} not found");
            }

            existing.Name = instructor.Name;
            existing.Age = instructor.Age;

            return Task.CompletedTask;
        }

        internal Task DeleteInstructor(string id)
        {
            var existing = _instructors.FirstOrDefault(x => x.Id == id);

            if (existing == null)
            {
                throw new InvalidOperationException($"Instructor with id={id} not found");
            }

            _instructors.Remove(existing);

            return Task.CompletedTask;
        }
    }
}

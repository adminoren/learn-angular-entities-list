using LearnAngularEntitiesListApp.Models;
using LearnAngularEntitiesListApp.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace LearnAngularEntitiesListApp.Controllers
{
    [Route("api/instructor")]
    public class InstructorController : Controller
    {
        private readonly InstructorService _instructorService;

        public InstructorController(InstructorService instructorService)
        {
            _instructorService = instructorService;
        }

        [HttpGet]
        public async Task<IEnumerable<Instructor>> GetAllAsync()
        {
            return await _instructorService.GetAllInstructorsAsync();
        }

        [HttpGet("{id}")]
        public async Task<Instructor> GetInstructorbyId(string id)
        {
            return await _instructorService.GetInstructorByIdAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult> AddInstructor([FromBody] Instructor instructor)
        {
            await _instructorService.AddInstructor(instructor);
            return Ok();
        }

        [HttpPut]
        public async Task<ActionResult> UpdateInstructor([FromBody] Instructor instructor)
        {
            await _instructorService.UpdateInstructor(instructor);
            return Ok();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteInstructor(string id)
        {
            await _instructorService.DeleteInstructor(id);
            return Ok();
        }
    }
}

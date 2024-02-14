using Azure;
using ClientApp.Data;
using ClientApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace ClientApp.Controllers
{
    [ApiController]
    [Route("Client")]
    public class ClientController : Controller
    {
        private AppDbContext _context;
        public ClientController(AppDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult Get()
        {
            List<ClientDetail> clients = _context.ClientDetails.OrderBy(x => x.Name).ToList();
            return new JsonResult(new { success = true, Response = clients });
        }

        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetClientById(int id)
        {
            try
            {
                if (id > 0)
                {
                    ClientDetail client = _context.ClientDetails.Where(x => x.Id == id).FirstOrDefault();
                    return new JsonResult(new { success = true, Response = client });
                }
                return new JsonResult(new { success = false });
            }
            catch (Exception ex)
            {
                return new JsonResult(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }

        [HttpPost]
        public IActionResult Create(ClientDetail clientDetail)
        {
           _context.ClientDetails.Add(clientDetail);
            _context.SaveChanges();
            return new JsonResult(new { success = true });
        }

        [HttpPut]
        public IActionResult Update(ClientDetail clientDetail)
        {
            try
            {
                ClientDetail clientDetailFromDb = _context.ClientDetails.Where(x => x.Id == clientDetail.Id).FirstOrDefault();
                if (clientDetailFromDb != null)
                {
                    clientDetailFromDb.WebSite = clientDetail.WebSite;
                    clientDetailFromDb.Name = clientDetail.Name;
                    clientDetailFromDb.DirectorName = clientDetail.DirectorName;
                    clientDetailFromDb.EmailAddress = clientDetail.EmailAddress;
                    _context.ClientDetails.Update(clientDetailFromDb);
                    _context.SaveChanges();
                }
                return new JsonResult(new { success = true });
            }
            catch(Exception ex)
            {
                return new JsonResult(new { success = false, message = ex.Message
                });
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public IActionResult Delete(int id)
        {
            try
            {
                ClientDetail clientDetailFromDb = _context.ClientDetails.Where(x => x.Id == id).FirstOrDefault();
                if (clientDetailFromDb != null)
                {
                    _context.ClientDetails.Remove(clientDetailFromDb);
                    _context.SaveChanges();
                }
                return new JsonResult(new { success = true });
            }
            catch (Exception ex)
            {
                return new JsonResult(new
                {
                    success = false,
                    message = ex.Message
                });
            }
        }
    }
}

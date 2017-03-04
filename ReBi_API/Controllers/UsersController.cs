using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ReBi_API.Models;

namespace ReBi_API.Controllers
{
    public class UsersController : ApiController
    {
        User[] users = new User[]
        {
            new User { Id = 1, FirstName = "Themis", LastName = "Bogiatzoglou", Email = "themis.bo@gmail.com", Password = "123"},
            new User { Id = 2, FirstName = "Alexandra", LastName = "Triantafillidou", Email = "alex.tr@gmail.com", Password = "1234"},
            new User { Id = 3, FirstName = "FLA", LastName = "FLAFLA", Email = "FLALFA@gmail.com", Password = "1235"},
        };

        public IEnumerable<User> GetAllUsers()
        {
            return users;
        }

        public IHttpActionResult GetUser(int id)
        {
            var user = users.FirstOrDefault((p) => p.Id == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}

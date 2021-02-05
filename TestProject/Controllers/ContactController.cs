using System;
using System.Web.Mvc;
using TestProject.Models;
using Umbraco.Web.Mvc;

namespace TestProject.Controllers
{
    public class ContactController : SurfaceController
    {
        [HttpPost]
        public ActionResult Submit(ContactFormViewModel model)
        {
            if (model == null) throw new ArgumentNullException(nameof(model));
            if (!ModelState.IsValid)
                return CurrentUmbracoPage();

            return RedirectToCurrentUmbracoPage();
        }
    }
}
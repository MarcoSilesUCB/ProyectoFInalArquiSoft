using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendConcesionaria.Exceptions
{
    public class BadRequestOperationException : Exception
    {
        public BadRequestOperationException(string message)
            : base(message)
        {

        }
    }
}

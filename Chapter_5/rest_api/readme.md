Repository Pattern / Architecture

/controllers 
 -> gateway request client dan response ke client
/services
 -> business logic dari aplikasi
/repositories (casenya database)
 -> melakukan koneksi ke DB

Tugas

1. [GET] API Get by ID -> /users/:id v
2. [PUT] API Update by ID -> /users/:id (kurang id)
3. [DELETE] API Delete by ID -> /users/:id v
4. [GET] API Get All Books -> /users?title=? (malah nampil semua)
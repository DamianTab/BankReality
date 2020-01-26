package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.BaseModel;
import damian.tab.bankreality.database.model.PrimaryKey;
import damian.tab.bankreality.database.model.PrimaryKeyAccess;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
public class GenericRESTApi<T extends PrimaryKeyAccess> {

    private final JpaRepository<T, PrimaryKey> dao;

    @GetMapping
    public List<T> list() {
        return dao.findAll();
    }

    @PostMapping
//    public int create(@RequestBody T entity) {
    public PrimaryKey create(@RequestBody T entity) {
        dao.saveAndFlush(entity);
        return entity.getPrimaryKey();
//        return 0;
    }
//
//    @PutMapping("/{id}")
//    public T update(@PathVariable(value = "id") long id, @RequestBody T entity) {
//        return dao.save(entity);
//    }
//
//    @DeleteMapping("/{id}")
//    public void delete(@PathVariable(value = "id") long id) {
////        dao.delete(id);
//    }
//
//    @GetMapping("/{id}")
//    public T get(@PathVariable(value = "id") long id) {
////        return dao.getOne(id);
//        return null;
//    }
}

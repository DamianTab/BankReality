package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.CreditKey;
import damian.tab.bankreality.database.model.PrimaryKey;
import damian.tab.bankreality.database.model.PrimaryKeyAccess;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
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
    public int create(@RequestBody T entity) {
        dao.saveAndFlush(entity);
//        if( entity.receivePrimaryKey() instanceof CreditKey){
//            CreditKey temp = (CreditKey) entity.receivePrimaryKey();
//            return temp.getId();
//        }
        return entity.receiveId();
//        return entity.loler();
//        return 0;
    }

    @PostMapping("/new")
//    public int create(@RequestBody T entity) {
    public int create1(@RequestBody T entity) {

        dao.saveAndFlush(entity);
//        if( entity.receivePrimaryKey() instanceof CreditKey){
//            CreditKey temp = (CreditKey) entity.receivePrimaryKey();
//            return temp.getId();
//        }
        return entity.receiveId();
//        return entity.loler();
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

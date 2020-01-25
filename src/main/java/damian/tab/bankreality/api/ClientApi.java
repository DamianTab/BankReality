package damian.tab.bankreality.api;

import damian.tab.bankreality.database.model.Client;
import damian.tab.bankreality.database.repository.ClientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RequestMapping("/client")
@RestController
@RequiredArgsConstructor
@Slf4j
public class ClientApi {

    private final ClientRepository productRepository;


    @GetMapping("/test")
    public void lol() {
        log.info("{}",productRepository.findById(1000000).get().hashCode());
        log.info("{}",productRepository.findById(1000000).get().toString());
    }


    @GetMapping
    public List<Client> retrieveAll() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Client findByID(@PathVariable int id) {
        Optional<Client> oClient = productRepository.findById(id);

//        todo not found

//            if (!product.isPresent()) throw new ExceptionProductNotFound(id);

        return oClient.get();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable int id) {
        productRepository.deleteById(id);
    }

    @PostMapping("/create")
    public int createNewProduct(@RequestBody Client client) {
        productRepository.saveAndFlush(client);
        return client.getLogin();
    }

    @PutMapping("/{id}")
    public ResponseEntity updateProduct(@RequestBody Client client, @PathVariable int id) {
        Optional<Client> oldProduct = productRepository.findById(id);

        if (!oldProduct.isPresent())
//            throw new ExceptionProductNotFound(id);
            return ResponseEntity.notFound().build();

        client.setLogin(id);
        productRepository.save(client);
        return ResponseEntity.status(200).build();
    }
}
